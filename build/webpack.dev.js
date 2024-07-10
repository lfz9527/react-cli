// webpack.dev.js
const { merge } = require("webpack-merge")
const base = require("./webpack.base.js")

module.exports = merge(base, {
  mode: "development", // 开发模式
  resolve: {
    // 优先采用es6模块化方式的代码
    mainFields: ["module", "main", "browser"],
  },
  devServer: {
    hot: true,
    open: true, // 编译完自动打开浏览器
    port: 8080,
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
    },
  },
})
