module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: 'airbnb-base',
  overrides: [
    {
      env: {
        node: true,
      },
      files: [
        '.eslintrc.{js,cjs}',
      ],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'linebreak-style': 'off',
    'no-console': 'off',
    'import/newline-after-import': 'off',
    'indent': 'off',
    'quote-props': 'off',
    'no-param-reassign': 'off',
    'camelcase': 'off',
    'object-curly-newline': 'off',
  },
};
