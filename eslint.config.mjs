import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

import stripJsonComments from "strip-json-comments";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
});

const oldConfig = JSON.parse(stripJsonComments(fs.readFileSync(path.resolve(__dirname, ".eslintrc"), "utf8")));

export default [
  {
    ignores: ["**/public", "**/node_modules/*", "**/.next/*", "**/dist/*"],
  },
  ...compat.config(oldConfig),
];
