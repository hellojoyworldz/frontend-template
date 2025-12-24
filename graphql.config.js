import { config } from "dotenv";
import { join } from "path";

config({ path: join(process.cwd(), ".env.development") });

const graphqlConfig = {
  schema: `${process.env.NEXT_PUBLIC_GRAPHQL_URL}`,
  documents: "src/**/*.ts",
};

export default graphqlConfig;
