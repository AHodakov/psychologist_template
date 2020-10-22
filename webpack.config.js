const MiniCssExtract = require("mini-css-extract-plugin");
const CopyWebpack = require("copy-webpack-plugin");
const HtmlWebpack = require("html-webpack-plugin");

module.exports = {
  output: {
    filename: "js/bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(s*)css$/i,
        use: [MiniCssExtract.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpe?g|svg|gif)$/i,
        loader: "file-loader",
        options:{
          outputPath: "img",
          publicPath: "../img",
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtract({
      filename: "css/[name].css",
      chunkFilename: "[id].css",
    }),
    new CopyWebpack(
      {
      patterns: [{ from: "src/assets/imgs", to: "img" }], 
    }),
    new HtmlWebpack({
      template: "./public/index.html",
    }),
    new HtmlWebpack({
      filename: "working-methods.html",
      template: "./public/working-methods.html",
    }),
    new HtmlWebpack({
      filename: "articles.html",
      template: "./public/articles.html",
    }),
    new HtmlWebpack({
      filename: "services.html",
      template: "./public/services.html",
    }),
    new HtmlWebpack({
      filename: "faq.html",
      template: "./public/faq.html",
    }),
    new HtmlWebpack({
      filename: "contacts.html",
      template: "./public/contacts.html",
    }),
  ],
};
