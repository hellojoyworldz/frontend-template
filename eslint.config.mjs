import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import yakPlugin from "eslint-plugin-yak";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  yakPlugin.configs.recommended,
  {
    // 전역적으로 적용할 규칙들
    rules: {
      "@next/next/no-img-element": "off",
      "react-hooks/exhaustive-deps": "off",
      "eslint-plugin-yak/style-conditions": "off",
    },
  },
  {
    files: ["src/graphql/**/*.ts", "src/graphql/**/*.tsx"],
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
      "graphql/template-strings": "off",
      "graphql/named-operations": "off",
    },
  },
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
