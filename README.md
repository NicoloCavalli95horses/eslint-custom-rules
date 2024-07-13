# ESLint custom rules
This project is designed to create and test custom ESLint rules for JavaScript development. ESLint is a powerful tool for ensuring code quality and consistency, and custom rules can help enforce specific coding standards and practices for your project.

## Available custom rules

### Misspelled events name
This rule detects misspelled events name and suggest a quick fix based on most common events name

![misspelled events name](/public/assets/ev_name_error.png)

- Prevent error-prone situations
- Improve the development experience
- Automatically suggest the most likely event name

### Misspelled CSS variables
This rule detects misspelled CSS variables name in JavaScript files, and suggest a quick fix based on global CSS variables defined in a main.css file

![misspelled events name](/public/assets/css_var_error.png)

- Prevent error-prone situations
- Automatically suggest the most likely CSS variable name
- When using a new global variable, this remind the developer to create the global variable

### Named params warning
This rule detects functions with 3 or more parameters and suggest using named parameters within an object.

![named parameters warning](/public/assets/named_params_warn.png)

- Improve readability and maintainability of functions by promoting best practices.
- Simplify complex parameter structures, such as: ```function( {a, b}, c, d ) { ... } ``` by suggesting the use of a single object.
- The ```rest``` operator, if any, is isolated, and a compact and intuitive structure of parameters is suggested
- Enhance consistency across the codebase
- In projects that do not use TypeScript,explicit named parameters help developers better understand the expected parameter types

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