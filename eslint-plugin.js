// ============
// Import
// ============
const checkEventsName = require("./rules/check-events-name");
const checkCssVariables = require("./rules/check-css-variables");
const namedParametersWarning = require("./rules/named-parameters-warning");

// ============
// Export
// ============
module.exports = {
    rules: { 
      "check-events-name": checkEventsName,
      "check-css-variables": checkCssVariables,
      "named-parameters-warning": namedParametersWarning,
    }
};
