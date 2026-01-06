const fs = require("fs");
const path = require("path");
const { GRAPHQL } = require("./constants");

const fragmentsPath = path.join(process.cwd(), GRAPHQL.AUTO_DIR, `${GRAPHQL.FRAGMENTS_NAME}.ts`);
const operationsPath = path.join(process.cwd(), GRAPHQL.AUTO_DIR, `${GRAPHQL.OPERATIONS_NAME}.ts`);
const combinePath = path.join(process.cwd(), GRAPHQL.AUTO_DIR, `${GRAPHQL.COMBINE_NAME}.ts`);

// 중첩 객체로 치환 여부 (graphql-fragments 옵션과 맞춰줘야함)
const includeCompositeFragments = false;
// 타입 주석(# Type) 제거 여부
const stripTypeComments = true;

const countChar = (line, char) => (line.match(new RegExp(`\\${char}`, "g")) || []).length;

const readFragments = () => {
  if (!fs.existsSync(fragmentsPath)) return new Map();
  const content = fs.readFileSync(fragmentsPath, "utf8");
  const lines = content.split("\n");
  const fragments = new Map();

  for (let i = 0; i < lines.length; i += 1) {
    const match = lines[i].match(/^\s*fragment\s+(\w+)\s+on\s+(\w+)\s*\{/);
    if (!match) continue;

    const [, fragmentName, typeName] = match;
    if (fragmentName !== `${typeName}Fragment`) continue;

    let depth = countChar(lines[i], "{") - countChar(lines[i], "}");
    const bodyLines = [];
    for (let j = i + 1; j < lines.length; j += 1) {
      depth += countChar(lines[j], "{");
      depth -= countChar(lines[j], "}");
      if (depth <= 0) {
        break;
      }
      bodyLines.push(lines[j]);
    }

    const hasNested = bodyLines.some((line) => line.includes("{"));
    fragments.set(fragmentName, { typeName, hasNested });
  }

  return fragments;
};

const replaceBlocks = (lines, fragments, usedFragments) => {
  let workingLines = [...lines];

  for (let i = 0; i < workingLines.length; i += 1) {
    const openMatch = workingLines[i].match(/^(\s*)(\w+)(?:\s*\([^)]*\))?\s*\{$/);
    if (!openMatch) continue;

    const commentMatch = workingLines[i + 1]?.match(/^\s*#\s*(\w+)/);
    if (!commentMatch) continue;

    const typeName = commentMatch[1];
    const fragmentName = `${typeName}Fragment`;
    const fragmentInfo = fragments.get(fragmentName);
    if (!fragmentInfo) continue;

    let depth = 0;
    let endIndex = -1;
    for (let j = i; j < workingLines.length; j += 1) {
      depth += countChar(workingLines[j], "{");
      depth -= countChar(workingLines[j], "}");
      if (depth === 0) {
        endIndex = j;
        break;
      }
    }
    if (endIndex === -1) continue;

    const blockLines = workingLines.slice(i + 2, endIndex);
    const blockHasNested = blockLines.some((line) => line.includes("{"));
    const hasSpread = blockLines.some((line) => line.includes(`...${fragmentName}`));
    const innerIndent = (workingLines[i + 1].match(/^(\s*)/) || [""])[0];

    if (!includeCompositeFragments && blockHasNested) {
      let nestedDepth = 0;
      const nestedLines = [];
      for (const line of blockLines) {
        const nextDepth = nestedDepth + countChar(line, "{") - countChar(line, "}");
        if (nestedDepth > 0 || nextDepth > 0) {
          nestedLines.push(line);
        }
        nestedDepth = nextDepth;
      }

      if (!usedFragments.set.has(fragmentName)) {
        usedFragments.set.add(fragmentName);
        usedFragments.ordered.push(fragmentName);
      }

      const processedNested = replaceBlocks(nestedLines, fragments, usedFragments);

      if (!hasSpread) {
        const replacement = [
          workingLines[i],
          workingLines[i + 1],
          `${innerIndent}...${fragmentName}`,
          ...processedNested,
          workingLines[endIndex],
        ];
        workingLines.splice(i, endIndex - i + 1, ...replacement);
        endIndex = i + replacement.length - 1;
      }

      i = endIndex;
      continue;
    }

    if (!hasSpread) {
      const replacement = [
        workingLines[i],
        workingLines[i + 1],
        `${innerIndent}...${fragmentName}`,
        workingLines[endIndex],
      ];
      workingLines.splice(i, endIndex - i + 1, ...replacement);
      endIndex = i + replacement.length - 1;
    }

    if (!usedFragments.set.has(fragmentName)) {
      usedFragments.set.add(fragmentName);
      usedFragments.ordered.push(fragmentName);
    }
    i = endIndex;
  }

  return workingLines;
};

const replaceBlocksWithFragments = (doc, fragments) => {
  let lines = doc.split("\n");
  const usedFragments = { ordered: [], set: new Set() };
  lines = replaceBlocks(lines, fragments, usedFragments);
  if (stripTypeComments) {
    lines = lines.filter((line) => !/^\s*#\s*\w+/.test(line));
  }

  if (usedFragments.ordered.length > 0) {
    const insertLines = usedFragments.ordered.map((name) => `  \${${name}}`);
    const existing = new Set(lines.filter((line) => line.trim().startsWith("${")));
    const filtered = insertLines.filter((line) => !existing.has(line.trim()));
    while (lines.length > 0 && lines[lines.length - 1].trim() === "") {
      lines.pop();
    }
    lines = [...lines, ...filtered];
  }

  return { doc: `${lines.join("\n")}\n`, usedFragments };
};

if (!fs.existsSync(operationsPath)) {
  console.error("auto-operations.ts not found. Run graphql-operations first.");
  process.exit(1);
}

const fragments = readFragments();
const usedFragmentImports = new Set();
const operationsContent = fs.readFileSync(operationsPath, "utf8");

let updatedBody = operationsContent.replace(/export const (\w+)\s*=\s*gql`([\s\S]*?)`;/g, (match, constName, doc) => {
  const { doc: updatedDoc, usedFragments } = replaceBlocksWithFragments(doc, fragments);
  usedFragments.ordered.forEach((name) => usedFragmentImports.add(name));
  return `export const ${constName} = gql\`${updatedDoc}\`;\n`;
});
updatedBody = updatedBody.replace(/\n{3,}/g, "\n\n");

const requiredImports = Array.from(usedFragmentImports).sort();
if (requiredImports.length > 0 && !updatedBody.includes('from "./auto-fragments"')) {
  const fragmentImport = `import { ${requiredImports.join(", ")} } from "./auto-fragments";`;
  if (updatedBody.includes('import { gql } from "@apollo/client";')) {
    updatedBody = updatedBody.replace(
      'import { gql } from "@apollo/client";',
      `import { gql } from "@apollo/client";\n${fragmentImport}`,
    );
  } else {
    updatedBody = `${fragmentImport}\n${updatedBody}`;
  }
}

fs.writeFileSync(combinePath, updatedBody);
console.log(`Generated: ${path.relative(process.cwd(), combinePath)}`);
