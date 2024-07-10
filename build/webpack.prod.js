// webpack.prod.js
const { merge } = require("webpack-merge")
const base = require("./webpack.base.js")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin")
const TerserPlugin = require("terser-webpack-plugin")
const glob = require("glob")
const { PurgeCSSPlugin } = require("purgecss-webpack-plugin")
const path = require("path")
const paths = require("./config/paths")

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
    minimize: true,
    minimizer: [
      // 压缩css
      new CssMinimizerPlugin({
        parallel: true,
        minimizerOptions: {
          //默认配置
          preset: "default",
        },
      }),
      // 压缩js，参考vue-cli的配置，肯定是经过优化调整的
      new TerserPlugin({
        terserOptions: {
          mangle: {
            //设置丑化相关的选项
            safari10: true,
          },
          compress: {
            //设置压缩相关的选项
            arrows: false,
            collapse_vars: false,
            comparisons: false,
            computed_props: false,
            hoist_funs: false,
            hoist_props: false,
            hoist_vars: false,
            inline: false,
            loops: false,
            negate_iife: false,
            properties: false,
            reduce_funcs: false,
            reduce_vars: false,
            switches: false,
            toplevel: false, //底层变量是否进行转换
            typeofs: false,
            booleans: true,
            if_return: true,
            sequences: true,
            unused: true,
            conditionals: true,
            dead_code: true,
            evaluate: true,
          },
        },
        parallel: true, //使用多进程并发运行提高构建速度
        extractComments: false, //是否将注释抽取到一个单独的文件中
      }),
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "static/css/[chunkhash:8].css", // 将css单独提测出来放在assets/css 下
    }),
    // 去除无用的样式
    new PurgeCSSPlugin({
      // paths表示指定要去解析的文件名数组路径
      // Purgecss会去解析这些文件然后把无用的样式移除
      paths: glob.sync(
        [
          path.join(__dirname, "../public/index.html"),
          path.join(__dirname, "../src/**/*"),
        ],
        { nodir: true },
      ),
    }),
  ],
})
