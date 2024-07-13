// ============
// Import
// ============
const customPlugin = require("./eslint-plugin");

// ============
// Export
// ============
module.exports = [
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "commonjs",
      ecmaVersion: "latest",
    },
    plugins: { customPlugin },
    rules: {
      "customPlugin/check-events-name": "error",
      "customPlugin/check-css-variables": "warn",
      "customPlugin/named-parameters-warning": "warn",
    },
  },
];
