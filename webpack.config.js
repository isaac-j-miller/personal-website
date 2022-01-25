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
    filename: "[name].bundle.js",
    library: {
      type: "umd",
    },
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
  optimization: {
    splitChunks: {
      chunks: "all",
      minSize: 20000,
      minRemainingSize: 0,
      minChunks: 1,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      enforceSizeThreshold: 50000,
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          reuseExistingChunk: true,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
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
