const path = require("path");

function resolve(dir) {
  return path.resolve(__dirname, dir);
}
// vue.config.js
module.exports = {
  // 选项...
  pages: {
    index: {
      entry: "src/main.js",
      title: "mo-chart"
    }
  },
  outputDir: "docs",
  publicPath: "./",
  css: {
    loaderOptions: {
      scss: {
        // eslint-disable-next-line prettier/prettier
        prependData: `@import "src/scss/vars.scss";`
      }
    },
    extract: {
      filename: "css/[name]_[chunkhash:8].css",
      chunkFilename: "css/[name]_[chunkhash:8].css"
    }
  },
  filenameHashing: false,
  chainWebpack: config => {
    config.resolve.alias.set("@", resolve("src"));
  }
};
