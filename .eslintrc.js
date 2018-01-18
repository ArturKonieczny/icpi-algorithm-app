module.exports = {
  extends: ['qb', "eslint:recommended", "plugin:react/recommended"],
  rules: {
    'no-unused-vars': ['error', {
      'vars': 'all',
      'args': 'after-used',
      'ignoreRestSiblings': false
    }],
    'no-plusplus': ['off'],
    'no-console': ['warn'],
    'linebreak-style': ['off']
  }
};
