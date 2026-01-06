import { config } from "dotenv";
import { join } from "path";

config({ path: join(process.cwd(), ".env.development") });
const local = "src/graphql/schema.graphql";
const remote = process.env.GRAPHQL_URL;

const graphqlConfig = {
  schema: local,
  documents: "src/**/*.ts",
};

export default graphqlConfig;
