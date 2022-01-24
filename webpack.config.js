const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx",
  mode: process.env.NODE_ENV === "production" ? "production" : "development",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  target: "web",

  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    chunkFilename: "[id].js",
    filename: "[hash].js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    allowedHosts: "all",
    liveReload: true,
    hot: true,
    static: {
      directory: path.join(__dirname, "dist"),
      watch: false,
    },
    compress: true,
    host: "127.0.0.1",
    port: 3000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Isaac J Miller",
      filename: "index.html",
      inject: "head",
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "public",
          to: "public",
        },
      ],
    }),
  ],
};
