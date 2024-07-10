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
    path: paths.dist, // 打包后的代码放在dist目录下
    filename: `static/js/[name]_[chunkhash:8]_${appPackage.version}.js`, // 打包入口的文件名
    chunkFilename: `static/js/[name]_[chunkhash:8].js`, // 于指定非入口文件的名称，即间接引入的代码块（chunk）的文件名。splitChunks分割的文件也会命名
    clean: true,
  },
  resolve: {
    //如果target为webworker或web（默认），mainFields默认值为["browser", "module", "main"]
    // 针对 Npm 中的第三⽅模块优先采⽤ module 中指向的 ES6 模块化语法的⽂件
    mainFields: ["module", "main", "browser"], // 提高查找速度
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
            test: /.(ts|tsx|jsx)$/,
            include: paths.appSrc,
            exclude: /node_modules/,
            use: [
              "thread-loader",
              {
                loader: "babel-loader",
                options: {
                  presets: [
                    ["@babel/preset-env"],
                    ["@babel/preset-typescript"],
                    ["@babel/preset-react"],
                  ],
                },
              },
            ],
          },
          {
            test: /\.css$/,
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
            ],
          },
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
              filename: "static/imgs/[name].[hash:8][ext]",
            },
          },
          // 处理字体
          {
            test: /\.(eot|ttf|woff|woff2)$/i,
            type: "asset/resource", // 字体图标不能转化为base64, 这里使用 asset/resource
            generator: {
              filename: "static/fonts/[name].[contenthash][ext]",
            },
          },
        ],
      },
    ].filter(Boolean),
  },
  plugins,
}
