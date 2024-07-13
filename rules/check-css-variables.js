// ============
// Import
// ============
const { findClosestString } = require("../utils/generic");
const fs = require("fs");
const path = require("path");

// ============
// Consts
// ============
const cssFilePath = path.join(__dirname, "..", "public", "main.css");
const validCssVars = getvalidCssVars(cssFilePath);

// ============
// Functions
// ============
function getvalidCssVars(filePath) {
  const cssContent = fs.readFileSync(filePath, "utf8");
  const cssVarRegex = /--[\w-]+/g;
  const matches = cssContent.match(cssVarRegex);
  return matches || [];
}

// ============
// Export
// ============
module.exports = {
  meta: {
    type: "problem",
    docs: {
      description: "Detects typos in CSS variables.",
    },
    fixable: "code",
    schema: [],
  },
  create(context) {
    return {
      AssignmentExpression(node) {
        if (
          node.left.object.type === "MemberExpression" &&
          node.left.object.property.name === "style" &&
          node.right.type === "Literal" &&
          typeof node.right.value === "string"
        ) {
          const style = node.right.value;
          const match = style.match(/var\(--([a-zA-Z0-9-_]+)\)/);

          if (!match) { return; }
          const varName = `--${match[1]}`; // [1] variable name without --
          if (!validCssVars.includes(varName)) {
            const closestVarName = findClosestString(varName, validCssVars);
            context.report({
              node,
              message: `The CSS variable ${varName} is not defined.`,
              fix(fixer) {
                const newVal = style.replace(varName, closestVarName);
                return fixer.replaceText(node.right, `"${newVal}"`);
              },
            });
          }
        }
      },
    };
  },
};
