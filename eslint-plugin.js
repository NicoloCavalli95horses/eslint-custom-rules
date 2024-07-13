// ============
// Import
// ============
const checkEventsName = require("./rules/check-events-name");
const checkCssVariables = require("./rules/check-css-variables");

// ============
// Export
// ============
module.exports = {
    rules: { 
      "check-events-name": checkEventsName,
      "check-css-variables": checkCssVariables
      // ... add other rules
    }
};
