// ============
// Import
// ============
const { RuleTester } = require("eslint");
const checkEventsName = require("../rules/check-events-name");

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
const RULE_NAME = "check-events-name";
const TEST_STEPS = {
  valid: [
    { code: 'button.addEventListener("mousedown");' },
    { code: 'input.addEventListener("change");' },
    { code: 'window.addEventListener("resize");' },
    { code: 'window.addEventListener("animationiteration");' },
    { code: 'window.addEventListener("loadedmetadata");' },
    { code: 'document.addEventListener("");' },
  ],
  invalid: [
    {
      code: 'button.addEventListener("mosedown");',
      errors: [{ message: "mosedown is not a valid event name" }],
      output: 'button.addEventListener("mousedown");',
    },
    {
      code: 'input.addEventListener("chnge");',
      errors: [{ message: "chnge is not a valid event name" }],
      output: 'input.addEventListener("change");',
    },
    {
      code: 'window.addEventListener("resze");',
      errors: [{ message: "resze is not a valid event name" }],
      output: 'window.addEventListener("resize");',
    },
    {
      code: 'document.addEventListener("c");',
      errors: [{ message: "c is not a valid event name" }],
      output: 'document.addEventListener("cut");',
    },
    {
      code: 'textarea.addEventListener("mousedownmouseup");',
      errors: [{ message: "mousedownmouseup is not a valid event name" }],
      output: 'textarea.addEventListener("mousedown");',
    },
    {
      code: 'btn.addEventListener("mouseupmousedown");',
      errors: [{ message: "mouseupmousedown is not a valid event name" }],
      output: 'btn.addEventListener("mousedown");',
    },
    {
      code: 'el.addEventListener("animation");',
      errors: [{ message: "animation is not a valid event name" }],
      output: 'el.addEventListener("animationend");',
    },
  ],
};

// ============
// Execution
// ============
new RuleTester(OPTIONS).run(RULE_NAME, checkEventsName, TEST_STEPS);
