# ESLint custom rules
This project is designed to create and test custom ESLint rules for JavaScript development. ESLint is a powerful tool for ensuring code quality and consistency, and custom rules can help enforce specific coding standards and practices for your project.

## Available custom rules

### Misspelled events name
This rule detects misspelled events name and suggest a quick fix based on most common events name

![misspelled events name](/public/assets/ev_name_error.png)

### Misspelled CSS variables
This rule detects misspelled CSS variables name in JavaScript files, and suggest a quick fix based on global CSS variables defined in a main.css file

![misspelled events name](/public/assets/css_var_error.png)

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