const path = require("path");
const root = path.resolve(__dirname, ".."); // 项目的根目录绝对路径
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const config = require("./scss.js");
const { getConfig } = require("./config");
const { variables } = getConfig();

module.exports = {
  entry: config, // 入口文件路径
  output: {
    path: path.join(root, "theme"), // 出口目录
    filename: "components/[name].js",
    publicPath: "/"
  },
  resolve: {
    alias: {
      // 配置目录别名
      // 在任意目录下require('components/example') 相当于require('项目根目录/src/components/example')
      vue: "vue/dist/vue.js", //解决 [Vue warn]: You are using the runtime-only build of Vue
      "@": path.resolve("src")
    }
  },

  module: {
    // 配置loader
    rules: [
      {
        test: /\.(scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          {
            loader: "sass-loader",
            options: {
              prependData: variables //`@import "src/scss/varibles.scss";`
            }
          }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg)$/,
        loader: "url-loader",
        options: {
          publicPath: "../../fonts/",
          outputPath: "../fonts/",
          name: "v-[name].[ext]?[hash:7]"
        }
      }
    ]
  },
  optimization: {
    minimize: false
  },
  devtool: false,
  plugins: [
    new MiniCssExtractPlugin({
      filename: "components/[name].css",
      chunkFilename: "[id].css"
    })
  ]
};
