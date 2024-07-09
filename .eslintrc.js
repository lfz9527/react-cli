const OFF = 0
const WARN = 1
const ERROR = 2

module.exports = {
  // 定义代码执行的环境
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  // 用于扩展已有的配置，可以继承一些已经存在的配置文件，
  extends: ["standard-with-typescript", "plugin:react/recommended"],
  settings: {
    react: {
      version: "detect", // 自动检测 React 版本
    },
    // 这个配置是用于指定模块导入解析器的配置，主要用于告诉 ESLint 如何解析模块导入语句
    "import/resolver": {
      // node：指定了使用 Node.js 解析模块导入语句的配置。在这里，配置了支持的文件扩展名，包括 .tsx、.ts、.js 和 .json。
      node: {
        extensions: [".tsx", ".ts", ".js", ".jsx", ".json"],
      },
      // typescript：指定了使用 TypeScript 解析模块导入语句的配置。这个配置为空对象，表示使用默认配置。
      typescript: {},
    },
  },
  overrides: [
    // 检测ts和tsx，注意files要包括文件，否则会报错
    {
      files: ["./src/**/*.ts", "./src/**/*.tsx"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        sourceType: "module",
        project: "./tsconfig.json", // 指定 TypeScript 配置文件
      },
    },
    // 不检测js文件的类型, 有ignorePatterns就不需要了
    {
      extends: ["plugin:@typescript-eslint/disable-type-checked"],
      files: ["./**/*.js"],
    },
  ],
  // 插件列表，可以加入一些自定义规则。
  plugins: ["react"],
  // 规则配置，用于设定规则的严格程度
  rules: {
    "@typescript-eslint/consistent-type-definitions": OFF,
    // 对象的最后一个可以增加【,】
    "@typescript-eslint/comma-dangle": OFF,
    // 单引号关闭
    "@typescript-eslint/quotes": OFF,
    // 需要分号
    "@typescript-eslint/semi": OFF,
    // 允许未使用的变量
    "@typescript-eslint/no-unused-vars": OFF,
    // 不允许使用var
    "no-var": ERROR,
    // 允许使用非空断言
    "@typescript-eslint/no-non-null-assertion": OFF,
    // 函数不需要ts标注返回类型
    "@typescript-eslint/explicit-function-return-type": OFF,
    "no-tabs": OFF,
    "@typescript-eslint/indent": OFF,
    "@typescript-eslint/strict-boolean-expressions": OFF,
  },
  // 忽略文件
  ignorePatterns: [
    "/node_modules/**/*", // Ignore built files.
    "/public/**/*",
    "/dist/**/*",
  ],
}
