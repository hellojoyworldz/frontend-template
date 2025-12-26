const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");
const dotenv = require("dotenv");

dotenv.config({ path: ".env.development" });

if (!process.env.GRAPHQL_URL) {
  throw new Error("GRAPHQL_URL is not set");
}

const schemaPath = path.join(process.cwd(), "src/graphql/schema.graphql");
const tmpPath = `${schemaPath}.tmp`;

try {
  execSync(`npx get-graphql-schema ${process.env.GRAPHQL_URL} > ${tmpPath}`, {
    stdio: "inherit",
    shell: true,
  });
  fs.renameSync(tmpPath, schemaPath);
} catch (error) {
  if (fs.existsSync(tmpPath)) {
    fs.unlinkSync(tmpPath);
  }
  console.error("Failed to update schema.graphql. Keeping the existing file.");
  throw error;
}
