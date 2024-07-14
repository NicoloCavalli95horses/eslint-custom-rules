# ESLint custom rules
This project is designed to create and test custom ESLint rules for JavaScript development. ESLint is a powerful tool for ensuring code quality and consistency, and custom rules can help enforce specific coding standards and practices for your project.

## Available custom rules

### Misspelled events name
This rule detects misspelled events name and suggest a quick fix based on most common events name

![misspelled events name](/public/assets/ev_name_error.png)

- Prevent error-prone situations
- Improve the development experience
- Automatically suggest the most likely event name

### Named params warning
This rule detects function declaration with 3 or more parameters and suggests using named parameters within an object.

![named parameters warning](/public/assets/named_params_warning.png)

- Improve readability and maintainability of functions by promoting best practices
- Simplify complex parameter structures, such as: ```function( {a, b}, c, d ) { ... } ``` by suggesting the use of a single object
- If the ```rest``` operator is used, the rule isolates this element
- Explicitly defined default parameters are perserved
- Enhance consistency across the codebase
- In projects that do not use TypeScript, explicitly named parameters give developers a clearer expectation of parameter types

### Misspelled CSS variables
This rule detects misspelled CSS variables name in JavaScript files, and suggest a quick fix based on global CSS variables defined in a main.css file

![misspelled events name](/public/assets/css_var_error.png)

- Prevent error-prone situations
- Automatically suggest the most likely CSS variable name based on available global CSS variables
- When inserting a new global variable, this rule reminds the developer to create the global variable

## Init the repository
After cloning the repository locally, execute:

```
npm install
```

## Preview the ESlint rules
**Refresh** your IDE and then open the file public/main.js to visualize the ESlint rules in action

## Run tests
Execute the tests using the command:

```
npm run test
```

# Project Structure
```
eslint-custom-rules/
|── public/
│   └── index.html
│   └── main.js
│── rules/
│   ├── ...
│   └── ...
├── tests/
│   └── ...
│   └── ...
├── utils/
│   └── generic.js
├── .gitignore
├── .eslint-plugin.js
├── .eslint.config.js
├── package.json
├── README.md
```

# License
This project is licensed under the MIT License