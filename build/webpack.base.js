const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const paths = require("./config/paths")
const appPackage = require(paths.appPackageJson)
const WebpackBar = require("webpackbar")

const plugins = [
  new HtmlWebpackPlugin({
    inject: true,
    template: paths.appHtml, // 使用自定义模板
  }),
  // 进度条
  new WebpackBar({
    color: "#85d",
    basic: true,
    profile: false,
  }),
]

module.exports = {
  entry: paths.appIndexJs,
  output: {
    path: path.dist, // 打包后的代码放在dist目录下
    filename: `[name].[chunkhash:8].${appPackage.version}.js`, // 打包的文件名
    clean: true,
  },
  resolve: {
    // 配置 extensions 来告诉 webpack 在没有书写后缀时，以什么样的顺序去寻找文件
    extensions: paths.moduleFileExtensions,
    alias: {
      "@": paths.appSrc,
    },
  },
  stats: "errors-warnings",
  module: {
    rules: [
      {
        oneOf: [
          // 使用babel 处理 tsx
          {
            test: /.(jsx?)|(tsx?)$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
              options: {
                presets: [
                  ["@babel/preset-env"],
                  ["@babel/preset-typescript"],
                  ["@babel/preset-react"],
                ],
              },
            },
          },
          { test: /\.css$/, use: ["css-loader"] },
          // less
          {
            test: /\.less$/,
            use: [
              "style-loader",
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
          },
          // 处理文件
          {
            test: /\.(png|jpe?g|gif|svg|webp)$/i,
            type: "asset",
            parser: {
              dataUrlCondition: {
                maxSize: 25 * 1024, // 25kb
              },
            },
            generator: {
              filename: "assets/imgs/[name].[hash:8][ext]",
            },
          },
          // 处理字体
          {
            test: /\.(eot|ttf|woff|woff2)$/i,
            type: "asset/resource", // 字体图标不能转化为base64, 这里使用 asset/resource
            generator: {
              filename: "assets/fonts/[name].[contenthash][ext]",
            },
          },
        ],
      },
    ].filter(Boolean),
  },
  plugins,
}
