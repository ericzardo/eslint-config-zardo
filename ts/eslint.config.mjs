import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {files: ["**/*.{js,mjs,cjs,ts}"]},
  {languageOptions: { globals: {...globals.browser, ...globals.node} }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    rules: {
      "semi": ["error", "always"],
      "quotes": ["error", "double"],
      "no-unused-vars": "error",
      "no-undef": "error",
      "prefer-const": "error",
      "space-before-blocks": "error",
      "space-in-parens": ["error", "never"],
      "space-before-function-paren": ["error", "always"],
      "no-empty": ["error", { "allowEmptyCatch": true }],
      "no-use-before-define": "error",
      "indent": ["error", 2],
    }
  }
];