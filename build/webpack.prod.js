// webpack.prod.js
const { merge } = require("webpack-merge")
const base = require("./webpack.base.js")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin")

module.exports = merge(base, {
  mode: "production", // 生产模式
  module: {
    rules: [
      {
        oneOf: [
          {
            test: /\.(css|less)$/,
            use: [
              MiniCssExtractPlugin.loader, // 使用 MiniCssExtractPlugin.loader 代替 style-loader
              "css-loader",
              {
                loader: "postcss-loader",
                options: {
                  // 它可以帮助我们将一些现代的 CSS 特性，转成大多数浏览器认识的 CSS，并且会根据目标浏览器或运行时环境添加所需的 polyfill；
                  // 也包括会自动帮助我们添加 autoprefixer
                  postcssOptions: {
                    plugins: [["postcss-preset-env", {}]],
                  },
                },
              },
              "less-loader",
            ],
            // 排除 node_modules 目录
            exclude: /node_modules/,
          },
        ],
      },
    ],
  },
  optimization: {
    minimizer: [
      // 多进程并发执行，提升构建速度 。 运行时默认的并发数：os.cpus().length - 1
      new CssMinimizerPlugin(),
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "static/css/[chunkhash:8].css", // 将css单独提测出来放在assets/css 下
    }),
  ],
})
