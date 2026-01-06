const GRAPHQL = {
  URL: process.env.NEXT_PUBLIC_GRAPHQL_URL,
  PATH: "src/graphql/graphql.ts",
  SCHEMA_PATH: "src/graphql/schema.graphql",
  DIR: "src/graphql",
  AUTO_DIR: "src/graphql/auto",
  OPERATIONS_NAME: "auto-operations",
  FRAGMENTS_NAME: "auto-fragments",
  COMBINE_NAME: "auto-combine",
};

module.exports = { GRAPHQL };
