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
// 이름에 포함된 경우 생성 제외
const excludeNameKeywords = [];
// 각 그룹의 필드가 모두 존재하면 제외
const excludeWrapperFieldNameGroups = [["data", "paginatorInfo"], ["sample"]];
// 중첩 객체 생성 여부 (graphql-replace 옵션과 맞춰줘야함)
const includeCompositeFragments = false;

const schemaPath = path.join(process.cwd(), "src/graphql/schema.graphql");
const outputDir = path.join(process.cwd(), "src/graphql/auto");
const outputGraphqlPath = path.join(outputDir, "auto-fragments.graphql");
const outputTsPath = path.join(outputDir, "auto-fragments.ts");

const schemaSDL = fs.readFileSync(schemaPath, "utf8");
const schema = buildSchema(schemaSDL);

const shouldExcludeName = (name) => excludeNameKeywords.some((keyword) => name.includes(keyword));

const unwrapType = (type) => {
  let current = type;
  while (isNonNullType(current) || isListType(current)) {
    current = current.ofType;
  }
  return current;
};

const isScalarOrEnum = (type) => isScalarType(type) || isEnumType(type);
const indentUnit = "  ";
const indent = (level) => indentUnit.repeat(level);

const toConstName = (typeName) => `${typeName}Fragment`;
const toFragmentName = (typeName) => `${typeName}Fragment`;

const getObjectTypes = () => {
  const typeMap = schema.getTypeMap();
  return Object.values(typeMap)
    .filter((type) => isObjectType(type))
    .filter((type) => !type.name.startsWith("__"))
    .filter((type) => !["Query", "Mutation", "Subscription"].includes(type.name));
};

const buildSelection = (type, depth, visited, indentLevel, maxDepthForFragment, availableFragments) => {
  if (depth >= maxDepthForFragment) {
    return buildSelectionShallow(type, indentLevel);
  }

  return buildSelectionDeep(type, depth, visited, indentLevel, maxDepthForFragment, availableFragments);
};

const buildSelectionShallow = (type, indentLevel) => {
  if (isObjectType(type)) {
    const fields = Object.values(type.getFields())
      .filter((field) => isScalarOrEnum(unwrapType(field.type)))
      .map((field) => `${indent(indentLevel)}${field.name}`);
    return { lines: fields.length ? fields : [`${indent(indentLevel)}__typename`], deps: new Set() };
  }

  if (isInterfaceType(type) || isUnionType(type)) {
    return { lines: [`${indent(indentLevel)}__typename`], deps: new Set() };
  }

  return { lines: [], deps: new Set() };
};

const buildSelectionDeep = (type, depth, visited, indentLevel, maxDepthForFragment, availableFragments) => {
  if (isObjectType(type)) {
    const typeName = type.name;
    if (visited.has(typeName)) {
      return buildSelectionShallow(type, indentLevel);
    }

    const nextVisited = new Set(visited);
    nextVisited.add(typeName);

    return Object.values(type.getFields()).reduce(
      (acc, field) => {
        const fieldType = unwrapType(field.type);
        if (isScalarOrEnum(fieldType)) {
          acc.lines.push(`${indent(indentLevel)}${field.name}`);
          return acc;
        }

        if (isObjectType(fieldType)) {
          if (!includeCompositeFragments) {
            return acc;
          }
          const fragmentName = toFragmentName(fieldType.name);
          if (!availableFragments.has(fieldType.name)) {
            acc.lines.push(`${indent(indentLevel)}${field.name}`);
            return acc;
          }
          acc.deps.add(fragmentName);
          acc.lines.push(`${indent(indentLevel)}${field.name} {`);
          acc.lines.push(`${indent(indentLevel + 1)}# ${fieldType.name}`);
          acc.lines.push(`${indent(indentLevel + 1)}...${fragmentName}`);
          acc.lines.push(`${indent(indentLevel)}}`);
          return acc;
        }

        if (isInterfaceType(fieldType) || isUnionType(fieldType)) {
          if (!includeCompositeFragments) {
            return acc;
          }
          const nested = buildSelection(
            fieldType,
            depth + 1,
            nextVisited,
            indentLevel + 1,
            maxDepthForFragment,
            availableFragments,
          );
          if (!nested.lines.length) {
            acc.lines.push(`${indent(indentLevel)}${field.name}`);
            return acc;
          }

          nested.deps.forEach((dep) => acc.deps.add(dep));
          acc.lines.push(`${indent(indentLevel)}${field.name} {`);
          acc.lines.push(...nested.lines);
          acc.lines.push(`${indent(indentLevel)}}`);
          return acc;
        }

        acc.lines.push(`${indent(indentLevel)}${field.name}`);
        return acc;
      },
      { lines: [], deps: new Set() },
    );
  }

  if (isInterfaceType(type) || isUnionType(type)) {
    return { lines: [`${indent(indentLevel)}__typename`], deps: new Set() };
  }

  return { lines: [], deps: new Set() };
};

const hasNonScalarField = (type) =>
  Object.values(type.getFields()).some((field) => !isScalarOrEnum(unwrapType(field.type)));

const shouldSkipType = (type) => {
  const fieldNames = Object.keys(type.getFields());
  const skipNames = new Set(excludeWrapperFieldNameGroups.flat());
  const hasAllWrapperFields =
    excludeWrapperFieldNameGroups.length > 0 &&
    excludeWrapperFieldNameGroups.some((group) =>
      group.every((name) => skipNames.has(name) && fieldNames.includes(name)),
    );
  if (fieldNames.length > 0 && hasAllWrapperFields) {
    return true;
  }
  return shouldExcludeName(type.name);
};

const generateFragments = () => {
  const fragments = [];
  const types = getObjectTypes();
  const availableFragments = new Set(types.filter((type) => !shouldSkipType(type)).map((type) => type.name));

  types.forEach((type) => {
    if (shouldSkipType(type)) {
      return;
    }
    const selection = buildSelection(type, 0, new Set(), 1, maxDepth, availableFragments);
    if (!selection.lines.length) return;

    const fragmentName = toFragmentName(type.name);
    const document = `fragment ${fragmentName} on ${type.name} {\n${selection.lines.join("\n")}\n}`;
    fragments.push({ typeName: type.name, document, fragmentName, deps: Array.from(selection.deps) });
  });

  return fragments;
};

const sortFragmentsByDeps = (fragments) => {
  const byName = new Map(fragments.map((fragment) => [fragment.fragmentName, fragment]));
  const visiting = new Set();
  const visited = new Set();
  const result = [];
  const roots = fragments.filter((fragment) => fragment.deps.length === 0);
  const nonRoots = fragments.filter((fragment) => fragment.deps.length > 0);

  const visit = (fragment) => {
    if (visited.has(fragment.fragmentName)) return;
    if (visiting.has(fragment.fragmentName)) return;
    visiting.add(fragment.fragmentName);
    fragment.deps.forEach((dep) => {
      const depFragment = byName.get(dep);
      if (depFragment) {
        visit(depFragment);
      }
    });
    visiting.delete(fragment.fragmentName);
    visited.add(fragment.fragmentName);
    result.push(fragment);
  };

  roots.forEach((fragment) => visit(fragment));
  nonRoots.forEach((fragment) => visit(fragment));
  return result;
};

fs.mkdirSync(outputDir, { recursive: true });
const fragments = sortFragmentsByDeps(generateFragments());

// fragments - graphql 파일 생성
// const graphqlOutput = `# Auto-generated. Do not edit.\n# Depth: ${maxDepth}\n\n${fragments
//   .map((fragment) => fragment.document)
//   .join("\n\n")}\n`;
// fs.writeFileSync(outputGraphqlPath, graphqlOutput);
// console.log(`Generated: ${path.relative(process.cwd(), outputGraphqlPath)}`);

// fragments - ts 파일 생성
const tsOutput = `// Auto-generated. Do not edit.\n// Depth: ${maxDepth}\nimport { gql } from \"@apollo/client\";\n\n${fragments
  .map((fragment) => {
    const space = "  ";
    const depLines = fragment.deps.length ? fragment.deps.map((dep) => space + "${" + dep + "}").join("\n") + "\n" : "";
    const indentedDoc = fragment.document
      .split("\n")
      .map((line) => `${space}${line}`)
      .join("\n");
    return `export const ${toConstName(fragment.typeName)} = gql\`\n${depLines}${indentedDoc}\n\`;\n`;
  })
  .join("\n")}`;
fs.writeFileSync(outputTsPath, tsOutput);
console.log(`Generated: ${path.relative(process.cwd(), outputTsPath)}`);
