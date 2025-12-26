const fs = require("fs");
const path = require("path");

const fragmentsPath = path.join(process.cwd(), "src/graphql/auto/auto-fragments.ts");
const operationsPath = path.join(process.cwd(), "src/graphql/auto/auto-operations.ts");
const outputPath = path.join(process.cwd(), "src/graphql/auto/auto-replace.ts");

const readFragmentNames = () => {
  if (!fs.existsSync(fragmentsPath)) return new Set();
  const content = fs.readFileSync(fragmentsPath, "utf8");
  const regex = /fragment\s+(\w+)\s+on\s+(\w+)/g;
  const names = new Set();
  let match;
  while ((match = regex.exec(content)) !== null) {
    const [, fragmentName, typeName] = match;
    if (fragmentName === `${typeName}Fragment`) {
      names.add(fragmentName);
    }
  }
  return names;
};

const countChar = (line, char) => (line.match(new RegExp(`\\${char}`, "g")) || []).length;

const replaceBlocksWithFragments = (doc, fragmentNames, usedFragments) => {
  let lines = doc.split("\n");

  for (let i = 0; i < lines.length; i += 1) {
    const openMatch = lines[i].match(/^(\s*)(\w+)\s*\{$/);
    if (!openMatch) continue;

    const commentMatch = lines[i + 1]?.match(/^\s*#\s*(\w+)/);
    if (!commentMatch) continue;

    const typeName = commentMatch[1];
    const fragmentName = `${typeName}Fragment`;
    if (!fragmentNames.has(fragmentName)) continue;

    let depth = 0;
    let endIndex = -1;
    for (let j = i; j < lines.length; j += 1) {
      depth += countChar(lines[j], "{");
      depth -= countChar(lines[j], "}");
      if (depth === 0) {
        endIndex = j;
        break;
      }
    }
    if (endIndex === -1) continue;

    const blockLines = lines.slice(i + 2, endIndex);
    const hasSpread = blockLines.some((line) => line.includes(`...${fragmentName}`));
    const innerIndent = (lines[i + 1].match(/^(\s*)/) || [""])[0];

    if (!hasSpread) {
      const replacement = [lines[i], lines[i + 1], `${innerIndent}...${fragmentName}`, lines[endIndex]];
      lines.splice(i, endIndex - i + 1, ...replacement);
      endIndex = i + replacement.length - 1;
    }

    usedFragments.add(fragmentName);
    i = endIndex;
  }

  if (usedFragments.size > 0) {
    const insertLines = Array.from(usedFragments)
      .sort()
      .map((name) => `  \${${name}}`);
    const existing = new Set(lines.filter((line) => line.trim().startsWith("${")));
    const filtered = insertLines.filter((line) => !existing.has(line.trim()));
    while (lines.length > 0 && lines[lines.length - 1].trim() === "") {
      lines.pop();
    }
    lines = [...lines, ...filtered];
  }

  return `${lines.join("\n")}\n`;
};

if (!fs.existsSync(operationsPath)) {
  console.error("auto-operations.ts not found. Run graphql-operations first.");
  process.exit(1);
}

const fragmentNames = readFragmentNames();
const usedFragmentImports = new Set();
const operationsContent = fs.readFileSync(operationsPath, "utf8");

let updatedBody = operationsContent.replace(
  /export const (\w+)\s*=\s*gql`([\s\S]*?)`;/g,
  (match, constName, doc) => {
    const updatedDoc = replaceBlocksWithFragments(doc, fragmentNames, usedFragmentImports);
    return `export const ${constName} = gql\`${updatedDoc}\`;\n`;
  }
);
updatedBody = updatedBody.replace(/\n{3,}/g, "\n\n");

const requiredImports = Array.from(usedFragmentImports).sort();
if (requiredImports.length > 0 && !updatedBody.includes('from "./auto-fragments"')) {
  const fragmentImport = `import { ${requiredImports.join(", ")} } from "./auto-fragments";`;
  if (updatedBody.includes('import { gql } from "@apollo/client";')) {
    updatedBody = updatedBody.replace(
      'import { gql } from "@apollo/client";',
      `import { gql } from "@apollo/client";\n${fragmentImport}`
    );
  } else {
    updatedBody = `${fragmentImport}\n${updatedBody}`;
  }
}

fs.writeFileSync(outputPath, updatedBody);
console.log(`Generated: ${path.relative(process.cwd(), outputPath)}`);
