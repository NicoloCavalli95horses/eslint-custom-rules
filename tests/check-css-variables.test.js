// ============
// Import
// ============
const { RuleTester } = require("eslint");
const checkCssVars = require("../rules/check-css-variables");

// ============
// Consts
// ============

/**
 * NOTE
 * valid/invalid code: independent code samples parsed according to the eslint AST
 * errors: message showed to the user
 * output: fix suggestion
 */

const OPTIONS = {
  languageOptions: {
    ecmaVersion: 2015,
  },
};
const RULE_NAME = "check-css-variables";
const TEST_STEPS = {
  valid: [
    { code: 'button.style.color = "var(--text-red)"' },
    { code: 'button.style.color = "var(--text-blue)"' },
    { code: 'button.style.color = "var(--text-green)"' },
    { code: 'button.style.color = ""' },
  ],
  invalid: [
    {
      code: 'button.style.color = "var(--text-reed)"',
      errors: [{ message: "The CSS variable --text-reed is not defined." }],
      output: 'button.style.color = "var(--text-red)"',
    },
    {
      code: 'button.style.color = "var(--text-gred)"',
      errors: [{ message: "The CSS variable --text-gred is not defined." }],
      output: 'button.style.color = "var(--text-red)"',
    },
    {
      code: 'button.style.color = "var(--text-greenred)"',
      errors: [{ message: "The CSS variable --text-greenred is not defined." }],
      output: 'button.style.color = "var(--text-green)"',
    },
  ],
};

// ============
// Execution
// ============
new RuleTester(OPTIONS).run(RULE_NAME, checkCssVars, TEST_STEPS);
