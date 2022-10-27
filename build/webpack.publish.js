const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  //解决打包后出现多个Vue的问题
  externals: {
    vue: "vue"
  },
  entry: {
    app: ["./src/components/indexFull.js"]
  }, // 入口文件路径
  output: {
    chunkFilename: "[name].js?[chunkhash:5]",
    filename: "mo-ui.js",
    libraryTarget: "commonjs2",
    libraryExport: "default",
    library: "mo-ui"
  },
  resolve: {
    alias: {
      // 配置目录别名
      // 在任意目录下require('components/example') 相当于require('项目根目录/src/components/example')
      vue: "vue/dist/vue.js", //解决 [Vue warn]: You are using the runtime-only build of Vue
      "@": path.resolve("src")
    },
    extensions: [".js", ".vue"] // 引用js和vue文件可以省略后缀名
  },

  module: {
    // 配置loader
    rules: [
      {
        test: /\.(png|jpe?g|gif)(\?.*)?$/,
        loader: "url-loader",
        options: {
          limit: 1000,
          publicPath: "/img/",
          outputPath: "/img/",
          name: "[name].[ext]?[hash:7]"
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg)$/,
        loader: "url-loader",
        options: {
          publicPath: "/fonts/",
          outputPath: "/fonts/",
          name: "vui-[name].[ext]?[hash:7]"
        }
      },

      {
        test: /\.js$/, //匹配所有.js文件
        use: [
          {
            loader: "babel-loader"
          }
        ],
        exclude: /node_modules/ //排除node_module下的所有文件
      },
      {
        test: /\.vue$/, //匹配所有.js文件

        loader: "vue-loader",
        options: {
          loaders: {
            js: "babel-loader",
            scss: "vue-style-loader!css-loader!sass-loader?indentedSyntax"
          },
          extractCSS: true
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
      filename: "style-full.css?[contenthash:5]",
      chunkFilename: "[id].css"
    }),
    new VueLoaderPlugin(),
    new UglifyJsPlugin()
  ]
};
