import * as dotenv from "dotenv";
import type { CodegenConfig } from "@graphql-codegen/cli";

dotenv.config({ path: ".env.development" });

const config: CodegenConfig = {
  //schema: process.env.NEXT_PUBLIC_GRAPHQL_URL, // 원격 스키마 사용
  schema: "src/graphql/schema.graphql", // 로컬 스키마 파일 사용
  documents: [
    // "src/**/*.{ts,tsx}", // src 폴더 전체를 스캔
    "src/graphql/**/*.{ts,tsx}", // src/graphql 폴더만 스캔
    "!src/graphql/schema.graphql",
    "!src/graphql/graphql.ts",
    "!src/graphql/auto/**/*",
  ],
  ignoreNoDocuments: true,
  overwrite: true,
  generates: {
    "src/graphql/graphql.ts": {
      plugins: ["typescript", "typescript-operations", "typescript-react-apollo"],
      config: {
        // Apollo Client v4 훅 타입 /react 엔트리에서 제공
        apolloReactCommonImportFrom: "@apollo/client/react",
        apolloReactHooksImportFrom: "@apollo/client/react",
        withMutationOptionsType: false,
        withMutationFn: false,
        // hook 생성 옵션
        withHooks: true,
        withHOC: false,
        withComponent: false,
        // optional 속성 제거
        avoidOptionals: {
          field: true,
          inputValue: true,
          object: true,
        },
        // 타입 매핑
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
