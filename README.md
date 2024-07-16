# ESLint custom rules
This project is designed to create and test custom ESLint rules for JavaScript development. ESLint is a powerful tool for ensuring code quality and consistency, and custom rules can help enforce specific coding standards and practices for your project.

### Misspelled events name
This rule detects misspelled event names and suggests a quick fix based on the most common event names.

![misspelled events name](/public/assets/ev_name_error.png)

The benefits of this approach are the following:

- *Preventing silent failures*. Misspelled event names can lead to bugs that are difficult to detect because no error is thrown.
- *Time savings*. Detecting and fixing misspelled event names can be time-consuming. Highlighting the issue at write time can save the developer time and improve the development experience.
- *Autocorrection*. The most likely event name is automatically suggested.

### Named parameters warning in functions with 3 or more parameters
This rule detects function declarations with 3 or more parameters and suggests using named parameters within an object.

![named parameters warning](/public/assets/named_params_warning.png)

The benefits of this approach are the following:

- *Flexibility in parameter order*. In functions with named parameters, parameters can be passed in any order, which is especially useful when a function has a large number of optional inputs. This flexibility makes the code more robust and less error-prone.
- *Improved readability and clarity*. When you call a function, the parameter names make it clear what each value represents, which can be especially helpful for functions with many parameters or complex logic. Named parameters also give a clearer expectation of parameter types if the parameter names follow best practices.
- *Backward compatibility*. Adding new parameters to a function that uses named parameters will not invalidate existing calls to the function, as long as you don’t remove or change the names of existing parameters.
- *Improved code predictability*. Respecting the parameter structure across the codebase makes the code more predictable and easier to understand, as the developer is nudged to stick to agreed conventions.

*Other examples*

``` function(a, b, c) {...} ``` &rarr; ``` function( {a, b, c} = {} ) {...} ```

``` function(a=0, b=true, c='test') {...} ``` &rarr;
``` function( {a=0, b=true, c='test'} = {} ) {...} ```

``` function(a, b, c, ...d) {...} ``` &rarr;
``` function( {a, b, c} = {}, ...d ) {...} ```

### Misspelled CSS variables
This rule can detect an invalid CSS variable during a style assignment in JavaScript, by checking its presence in a pre-parsed global ```main.css``` file.

![misspelled events name](/public/assets/css_var_error.png)

The benefits of this approach are the following:

- *Preventing silent failures*. Misspelled CSS variables can lead to bugs that are difficult to detect because no error is thrown.
- *Time savings*. Detecting and fixing misspelled CSS variables can be time-consuming. Highlighting the issue at write time can save the developer time and improve the development experience.
- *Autocorrection*. The most likely CSS variable name is suggested based on available global CSS variables.
 
*Note*
Assigning a global CSS variable via vanilla JavaScript is not a common scenario in a large-scale application, but a similar approach could be integrated into an ESLint plugin that is designed to parse the content of a ```<style>``` tag or a dedicated CSS or SCSS file. Given the presence of CSS in different software contexts, a catch-all ESLint rule is not easily achievable.

### Init the repository
After cloning the repository locally, execute:

```
npm install
```

### Preview the ESlint rules
*Refresh* your IDE and then open the file public/main.js to visualize the ESlint rules in action

### Run tests
Execute the tests using the command:

```
npm run test
```
