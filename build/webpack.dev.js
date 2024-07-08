// webpack.dev.js
const { merge } = require("webpack-merge")
const base = require("./webpack.base.js")

module.exports = merge(base, {
  mode: "development", // 开发模式
  devServer: {
    hot: true,
    open: true, // 编译完自动打开浏览器
    host: "169.254.35.252",
    port: 8080,
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
    },
  },
})
