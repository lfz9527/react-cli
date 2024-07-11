// webpack.dev.js
const { merge } = require("webpack-merge")
const base = require("./webpack.base.js")
const path = require("path")
const ReactRefreshPlugin = require("@pmmmwh/react-refresh-webpack-plugin")

module.exports = merge(base, {
  mode: "development", // 开发模式
  resolve: {
    // 使⽤绝对路径指明第三⽅模块存放的位置，以减少搜索步骤
    // modules: [],
  },
  module: {
    /**
     * module.noParse 配置项可以让 Webpack 忽略对部分没采⽤模块化的⽂件的递归解析处理，
     * 这样做 的好处是能提⾼构建性能。
     * 原因是⼀些库，例如 jQuery 、ChartJS，
     * 它们庞⼤⼜没有采⽤模块化标 准，
     * 让 Webpack 去解析这些⽂件耗时⼜没有意义。
     */
    // noParse: [],
  },
  plugins: [
    new ReactRefreshPlugin(), // react-refresh 添加
  ],
  cache: {
    type: "filesystem", // 使用文件缓存
    cacheDirectory: path.join(__dirname, "../.temp_cache"),
  },
  devServer: {
    hot: true,
    open: false, // 编译完自动打开浏览器
    port: 8080,
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
    },
  },
})
