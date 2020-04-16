module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {


    // error handling
    'no-console': ['error', { allow: ['warn', 'error'] }],

    // indent
    'no-tabs': 'off',
    'indent': 'off',

    // disable some import stuff
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/no-unresolved': 'off',
    'import/no-dynamic-require': 'off',

    // disable for '__svg__'
    'no-underscore-dangle': 'off',

    'arrow-parens': ['error', 'as-needed'],

    'padded-blocks': 'off',

    'class-methods-use-this': 'off',

    'global-require': 'off',

    'func-names': ['error', 'never'],
  }
}
