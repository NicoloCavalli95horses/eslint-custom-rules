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
    type: "warn",
    docs: {
      description: "Detects typos in CSS variables and suggest fixes",
      category: "Best Practices",
      recommended: false,
    },
    fixable: "code",
    schema: [],
  },
  create(context) {
    return {
      AssignmentExpression(node) {
        const isAssigningStyle = 
          node.left.object.type === "MemberExpression" &&
          node.left.object.property.name === "style" &&
          node.right.type === "Literal" &&
          typeof node.right.value === "string";

        if (!isAssigningStyle) { return; }
        const style = node.right.value;
        const match = style.match(/var\(--([a-zA-Z0-9-_]+)\)/);

        if (!match) { return; }
        const varName = `--${match[1]}`; // [1] base variable name without var(--...)
        
        if (validCssVars.includes(varName)) { return; }

        // Replace invalid CSS variable with the closest valid one from main.css
        const closestVarName = findClosestString(varName, validCssVars);
        context.report({
          node,
          message: `The CSS variable ${varName} is not defined.`,
          fix(fixer) {
            const newVal = style.replace(varName, closestVarName);
            return fixer.replaceText(node.right, `"${newVal}"`);
          },
        });
      },
    };
  },
};
