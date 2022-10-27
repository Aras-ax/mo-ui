function getConfig(theme) {
  return {
    isProd: process.env.NODE_ENV === "production",
    variables: `@import "src/scss/varibles.scss";`,
    outPath:"/dist"
  };
}

module.exports = {
  getConfig
};
