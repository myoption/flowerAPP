module.exports = {
  root: true,
  env: {
    node: true
  },
  // "space-before-function-paren": 0,
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'camelcase': [1, { "properties": "never" }],
    "quote-props": [1, "as-needed"]
  }
}
