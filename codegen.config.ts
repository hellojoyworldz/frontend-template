import * as dotenv from "dotenv";
import type { CodegenConfig } from "@graphql-codegen/cli";

dotenv.config({ path: `.env.development` });

const config: CodegenConfig = {
  schema: `${process.env.NEXT_PUBLIC_GRAPHQL_URL}`,
  documents: ["src/**/*.{ts,tsx,graphql}"],
  overwrite: true,
  generates: {
    "src/graphql/graphql.ts": {
      plugins: ["typescript", "typescript-operations", "typescript-react-apollo"],
      config: {
        withHooks: true,
        withHOC: false,
        withComponent: false,
        avoidOptionals: {
          field: true,
          inputValue: true,
          object: true,
        },
        scalars: {
          Date: "string",
          DateTime: "string",
          DateTimeTz: "string",
          DateTimeUtc: "string",
          BigInt: "number",
        },
        maybeValue: "T",
      },
    },
  },
};
export default config;
