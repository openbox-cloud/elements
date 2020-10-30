const path = require("path");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = {
  context: __dirname,
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "lib"),
    filename: "openbox-elements.common.js",
    library: {
      root: "VueTabs",
      amd: "vue-tabs",
      commonjs: "vue-tabs",
    },
    libraryTarget: "umd",
  },
  module: {
    rules: [
      {
        test: /\.js/,
        loader: "babel-loader",
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
    ],
  },
  plugins: [new VueLoaderPlugin()],
  resolve: {
    extensions: [".js", ".vue"],
  },
};
