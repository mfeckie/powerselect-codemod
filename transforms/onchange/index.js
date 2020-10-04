module.exports = function ({ source /*, path*/ }, { parse, visit }) {
  const ast = parse(source);

  return visit(ast, (env) => {
    let { builders: b } = env.syntax;

    return {
      ElementNode(node) {
        const tag = node.tag;
        if (tag === 'PowerSelect' || tag === 'PowerSelectWithCreate') {
          node.attributes
            .filter((attribute) => attribute.name == '@onchange')
            .forEach((attribute) => (attribute.name = '@onChange'));
        }
      },
    };
  });
};

module.exports.type = 'hbs';
