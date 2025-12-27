const fs = require("fs");
const path = require("path");
const {
  buildSchema,
  isEnumType,
  isInterfaceType,
  isListType,
  isNonNullType,
  isObjectType,
  isScalarType,
  isUnionType,
} = require("graphql");

// Object Depth
const maxDepth = Number("4");
// 이름에 포함된 경우 생성 제외 (대소문자 무시)
const excludeNameKeywords = ["admin", "partner"];

const schemaPath = path.join(process.cwd(), "src/graphql/schema.graphql");
const outputDir = path.join(process.cwd(), "src/graphql/auto");
const outputPath = path.join(outputDir, "auto-operations.graphql");
const outputTsPath = path.join(outputDir, "auto-operations.ts");

const schemaSDL = fs.readFileSync(schemaPath, "utf8");
const schema = buildSchema(schemaSDL);

const shouldExcludeName = (name) => {
  const lower = name.toLowerCase();
  return excludeNameKeywords.some((keyword) => lower.includes(keyword.toLowerCase()));
};

const unwrapType = (type) => {
  let current = type;
  while (isNonNullType(current) || isListType(current)) {
    current = current.ofType;
  }
  return current;
};

const isScalarOrEnum = (type) => isScalarType(type) || isEnumType(type);

const buildSelection = (type, depth, visited) => {
  if (depth >= maxDepth) {
    return buildSelectionShallow(type);
  }

  return buildSelectionDeep(type, depth, visited);
};

const buildSelectionShallow = (type) => {
  if (isObjectType(type)) {
    const fields = Object.values(type.getFields())
      .filter((field) => isScalarOrEnum(unwrapType(field.type)))
      .map((field) => field.name);
    return fields.length ? fields : ["__typename"];
  }

  if (isInterfaceType(type) || isUnionType(type)) {
    return ["__typename"];
  }

  return [];
};

const buildSelectionDeep = (type, depth, visited) => {
  if (isObjectType(type)) {
    const typeName = type.name;
    if (visited.has(typeName)) {
      // 무한 루프 방지
      return buildSelectionShallow(type);
    }

    const nextVisited = new Set(visited);
    nextVisited.add(typeName);

    const scalarLines = [];
    const nestedLines = [];

    Object.values(type.getFields()).forEach((field) => {
      const fieldType = unwrapType(field.type);
      if (isScalarOrEnum(fieldType)) {
        scalarLines.push(field.name);
        return;
      }

      if (isObjectType(fieldType) || isInterfaceType(fieldType) || isUnionType(fieldType)) {
        const nextDepth = depth + 1;
        const nested = buildSelection(fieldType, nextDepth, nextVisited);
        const typeLabel = fieldType.name ?? "Unknown";
        const space = `  `.repeat(nextDepth);
        nestedLines.push(
          nested.length
            ? `${field.name} {\n    ${space}# ${typeLabel}\n    ${space}${nested.join(`\n    ${space}`)}\n  ${space}}`
            : field.name,
        );
        return;
      }

      scalarLines.push(field.name);
    });

    return [...scalarLines, ...nestedLines];
  }

  if (isInterfaceType(type) || isUnionType(type)) {
    return ["__typename"];
  }

  return [];
};

const toConstName = (opType, name) => {
  // query, mutation 충돌나면 name 대신 prefix 붙이기
  // const prefix = `${opType}_${name}`;
  return name
    .replace(/([a-z0-9])([A-Z])/g, "$1_$2")
    .replace(/[^a-zA-Z0-9_]/g, "_")
    .toUpperCase();
};

const buildOperation = (opType, fieldName, field) => {
  const args = field.args || [];
  const varDefs = args.length ? `(${args.map((arg) => `$${arg.name}: ${arg.type.toString()}`).join(", ")})` : "";
  const argList = args.length ? `(${args.map((arg) => `${arg.name}: $${arg.name}`).join(", ")})` : "";

  const returnType = unwrapType(field.type);
  const selection = buildSelection(returnType, 0, new Set());
  const typeLabel = returnType?.name ?? "Unknown";
  const selectionBlock = selection.length ? ` {\n    # ${typeLabel}\n    ${selection.join("\n    ")}\n  }` : "";

  const opName = `${fieldName}`;

  return {
    opType,
    fieldName,
    document: `${opType.toLowerCase()} ${opName}${varDefs} {\n  ${fieldName}${argList}${selectionBlock}\n}`,
  };
};

const generateOperations = () => {
  const ops = [];
  const queryType = schema.getQueryType();
  const mutationType = schema.getMutationType();

  if (queryType) {
    const fields = queryType.getFields();
    Object.keys(fields).forEach((fieldName) => {
      if (shouldExcludeName(fieldName)) return;
      ops.push(buildOperation("Query", fieldName, fields[fieldName]));
    });
  }

  if (mutationType) {
    const fields = mutationType.getFields();
    Object.keys(fields).forEach((fieldName) => {
      if (shouldExcludeName(fieldName)) return;
      ops.push(buildOperation("Mutation", fieldName, fields[fieldName]));
    });
  }

  return ops;
};

fs.mkdirSync(outputDir, { recursive: true });
const operations = generateOperations();

// operations - graphql 파일 생성
// const output = `# Auto-generated. Do not edit.\n# Depth: ${maxDepth}\n\n${operations
//   .map((op) => op.document)
//   .join("\n\n")}\n`;
// fs.writeFileSync(outputPath, output);
// console.log(`Generated: ${path.relative(process.cwd(), outputPath)}`);

// operations - ts 파일 생성
const tsOutput = `// Auto-generated. Do not edit.\n// Depth: ${maxDepth}\nimport { gql } from \"@apollo/client\";\n\n${operations
  .map((op) => {
    const space = "  ";
    const indentedDoc = op.document
      .split("\n")
      .map((line) => `${space}${line}`)
      .join("\n");
    return `export const ${toConstName(op.opType, op.fieldName)} = gql\`\n${indentedDoc}\n\`;\n`;
  })
  .join("\n")}`;
fs.writeFileSync(outputTsPath, tsOutput);
console.log(`Generated: ${path.relative(process.cwd(), outputTsPath)}`);
