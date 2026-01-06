// Apollo v4 Suspense 타입 불일치 보정 (codegen 결과 후처리)
const fs = require("fs");
const { GRAPHQL } = require("./constants");

const filePath = GRAPHQL.PATH;
const content = fs.readFileSync(filePath, "utf8");

const fixed = content
  .split("\n")
  .map((line) => {
    if (line.includes("SuspenseQueryHookOptions") && !line.includes("SkipToken")) {
      return line.replace(/UseSuspenseQueryResult<([^,>]+),/, "UseSuspenseQueryResult<$1 | undefined,");
    }
    return line;
  })
  .join("\n");

fs.writeFileSync(filePath, fixed, "utf8");
