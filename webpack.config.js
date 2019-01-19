const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = {
  mode: "production",
  output: {
    filename: "overdrive.js"
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader"
      }
    ]
  },
  plugins: [new VueLoaderPlugin()]
};
