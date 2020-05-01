const path = require("path");
const webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js", "*.jsx"],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: "React Starter",
      template: "./public/index.html",
    }),
  ],
  output: {
    path: path.resolve(__dirname, "../", "build"),
    publicPath: "/",
    filename: "bundle.js",
  },
  devServer: {
    contentBase: "./build",
    port: 3001,
    hot: true,
  },
};
