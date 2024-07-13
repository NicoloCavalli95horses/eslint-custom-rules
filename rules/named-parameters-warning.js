module.exports = {
  meta: {
    type: "suggestion",
    docs: {
      description: "Suggest using named parameters if a function has 3 or more parameters",
      category: "Best Practices",
      recommended: false,
    },
    fixable: "code",
    schema: [],
  },
  create: function (context) {
    return {
      FunctionDeclaration(node) {
        if (node.params.length < 3) { return; }

        // Move the parameters inside an object, declaring an empty object as default
        context.report({
          node,
          message: "This function has 3 or more parameters: consider using named parameters within a single object",
          fix(fixer) {
            let restOpt = undefined;
            const paramNames = node.params.map(p => {
              if (p.type === 'ObjectPattern') {
                // object parameter with one or more keys, e.g., fn( {a, b}, c, d )
                return p.properties.map(prop => prop.key.name).flat().join(", ");
              } else if (p.type === 'RestElement') {
                // rest parameter, e.g, fn ( a, b, ...c )
                restOpt = p.argument.name;
                return undefined;
              }
              // regular parameter
              return p.name
            }).filter( p => p ); // remove undefined values to get [ a, b, c, d ] 

            const newParams = `{ ${paramNames.join(", ")} } = {}${ restOpt ? ', ...'+ restOpt : ''}`;
            const firstParam = node.params[0].range[0];
            const lastParam = node.params[node.params.length - 1].range[1];
            return fixer.replaceTextRange([firstParam, lastParam], newParams);
          }
        });
      },
    };
  },
};
