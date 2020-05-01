const Dotenv = require("dotenv-webpack");

module.exports = {
  mode: "development",
  devtool: "eval-source-map",
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
      },
    ],
  },
  plugins: [
    new Dotenv({
      path: "./.env.development",
    }),
  ],
};
