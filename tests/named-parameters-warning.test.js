// ============
// Import
// ============
const { RuleTester } = require("eslint");
const namedParametersWarning = require("../rules/named-parameters-warning");

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
    { code: 'function test( {a, b, c} ) { return; }' },
    { code: 'function test( {a, b, c} = {} ) { return; }' },
    { code: 'function test() { return; }' },
    { code: 'function test( {a} ) { return; }' },
    { code: 'function test( {a, b, c} = {}, ...d ) { return; }' },
    { code: 'function test( {a=0, b=1, c=2} = {} ) { return; }' },
    { code: 'function test( {a=false, b="test", c=[], d:{}} ) { return; }' },
  ],
  invalid: [
    {
      code: 'function test(a, b, c) { return; }',
      errors: [{ message: "This function has 3 or more parameters: consider using named parameters within a single object" }],
      output: 'function test({ a, b, c } = {}) { return; }',
    },
    {
      code: 'function test({a}, c, d) { return; }',
      errors: [{ message: "This function has 3 or more parameters: consider using named parameters within a single object" }],
      output: 'function test({ a, c, d } = {}) { return; }',
    },
    {
      code: 'function test({a, b, c}, d, e) { return; }',
      errors: [{ message: "This function has 3 or more parameters: consider using named parameters within a single object" }],
      output: 'function test({ a, b, c, d, e } = {}) { return; }',
    },
    {
      code: 'function test({a, b}, c, d, ...e) { return; }',
      errors: [{ message: "This function has 3 or more parameters: consider using named parameters within a single object" }],
      output: 'function test({ a, b, c, d } = {}, ...e) { return; }',
    },
    {
      code: 'function test(a=0, b=1, c=2, d=3) { return; }',
      errors: [{ message: "This function has 3 or more parameters: consider using named parameters within a single object" }],
      output: 'function test({ a=0, b=1, c=2, d=3 } = {}) { return; }',
    },
    {
      code: 'function test(a, b=true, c=[], d="test", e={}, ...f) { return; }',
      errors: [{ message: "This function has 3 or more parameters: consider using named parameters within a single object" }],
      output: 'function test({ a, b=true, c=[], d="test", e={} } = {}, ...f) { return; }',
    },
  ],
};

// ============
// Execution
// ============
new RuleTester(OPTIONS).run(RULE_NAME, namedParametersWarning, TEST_STEPS);
