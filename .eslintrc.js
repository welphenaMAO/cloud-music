module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard',
    // '@vue/typescript/recommended',
    "plugin:jsonc/recommended-with-jsonc",
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  // parser: "@babel/eslint-parser",
  rules: {
    "dot-notation": 1,
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // 禁用debugger
    "no-debugger": process.env.NODE_ENV !== "production" ? 2 : 0,
    // 函数前无需空格
    "space-before-function-paren": 0,
    // generator 迭代函数不能有空格
    "generator-star-spacing": 0,
    // 禁止使用多个空格
    "no-multi-spaces": 1,
    // 禁止自身比较
    "no-self-compare": 2,
    // 禁用稀疏数组
    "no-sparse-arrays": 2,
    // 禁止在变量定义之前使用他们
    "no-use-before-define": 2,
    // 使用类型安全的相等运算符 -- 全等
    "eqeqeq": 2,
    // 语句之间的填充线
    "newline-after-var": 2,
    // 禁止不必要的布尔转换
    "no-extra-boolean-cast": 1,
    // 禁止不必要的括号
    "no-extra-parens": 1,
    // 禁止出现空语句块
    "no-empty": 1,
    // 禁止对象字面量中出现重复的key
    "no-dupe-keys": 2,
    // 强制typeof 与有效的字段串比较
    "valid-typeof": 2,
    // 禁止在return、throw、continue、break 后出现不可达的代码
    "no-unreachable": 2,
    // 要求所有的 var 声明出现在它们所在的作用域顶部
    "vers-on-top": 0,
    // 强制在对象的属性中键与值之间使用一致的间距
    "key-spacing": [
      1,
      {
        beforeColon: false,
        afterColon: true
      }
    ],
    "keyword-spacing": [
      2,
      {
        overrides: {
          "if": {"after": false},
          "for": {"after": false},
          "while": {"after": false}
        }
      }
    ],
    // 禁止多次声明同一变量
    "no-redeclare": [
      2,
      {
        builtinGlobals: true
      }
    ],
    // 可以使用单双引号
    "quotes": [0, "double"],
    // 要求使用骆驼拼写法
    // camelcase: ["error", {
    //   "properties": "never"
    // }]
  },
  overrides: [
    {
      files: ["*.json", "*.jsonc", "*.json5"],
      parser: "jsonc-eslint-parser"
    }
  ]
}
