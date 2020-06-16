const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");
module.exports = {
  entry: ["./app.js"],
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: "file-loader",
      },
      { test: /\.(png|jpg|gif)$/, loader: "file-loader" },
      {
        test: /\.vue$/,
        use: "vue-loader",
      },
    ],
  },
  context: path.resolve(__dirname, "src"),
  plugins: [
    new HtmlWebPackPlugin({
      template: "./index.html",
      filename: "./index.html",
    }),
    new VueLoaderPlugin(),
  ],
  devServer: {
    historyApiFallback: true,
  },
};
