// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    // semi always强制加分号,必须加分号，不然报错
    'semi': ['error','always'],
    'no-tabs': 0,
    // 取消空格的代码检查
    'indent': 0,
    // 关闭对空行的代码检查
    'space-before-function-paren': 0,
    'no-unused-vars':0,
    'no-undef':0,
    'no-new':0
  }
};
