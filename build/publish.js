const path = require("path");
const webpack = require("webpack");
const component = require("./webpack.component.js");
const publish = require("./webpack.publish.js");
const scss = require("./webpack.scss.js");
const { getConfig } = require("./config");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const _ = require("lodash");

let themes = [];

function webpackPromise(config) {
  console.log("组件打包处理中...");
  return new Promise((resolve, reject) => {
    webpack(config, (err, stats) => {
      if (err) {
        reject(err);
        return;
      }

      process.stdout.write(
        stats.toString({
          chunks: true, // 使构建过程更静默无输出
          colors: true // 在控制台展示颜色
        }) + "\n"
      );

      resolve();
    });
  });
}

function correctConfig(cfg, variables, outPath, theme) {
  outPath = path.join(path.resolve(__dirname, ".."), outPath);
  cfg.mode = "production";

  cfg.plugins.push(
    new webpack.DefinePlugin({
      "process.env.THEME": JSON.stringify(theme)
    })
  );

  if (cfg.noCss) {
    delete cfg.noCss;
    cfg.module.rules.push({
      test: /\.(scss|css)$/,
      use: [
        "css-loader",
        "postcss-loader",
        {
          loader: "sass-loader",
          options: {
            prependData: variables
          }
        }
      ],
      exclude: /node_modules/
    });
  } else {
    cfg.module.rules.push({
      test: /\.(scss|css)$/,
      use: [
        MiniCssExtractPlugin.loader,
        "css-loader",
        "postcss-loader",
        {
          loader: "sass-loader",
          options: {
            prependData: variables
          }
        }
      ],
      exclude: /node_modules/
    });
  }

  cfg.output.path = outPath;
}

function run() {

  compile();
}

function compile() {
  let configs = [];

  let scssConfig = _.cloneDeep(scss);
  let componentConfig = _.cloneDeep(component);
  let publishConfig = _.cloneDeep(publish);

  const { variables, outPath } = getConfig();
  correctConfig(scssConfig, variables, path.join(outPath, "/lib"));
  correctConfig(componentConfig, variables, path.join(outPath, "/lib"));
  correctConfig(publishConfig, variables, outPath);
  configs.push(scssConfig, componentConfig, publishConfig);
  console.log("******************************************");
  console.log("风格处理：");
  console.log("变量文件：", variables);
  console.log("输出地址：", outPath);

  return webpackPromise(configs);
}

run();
