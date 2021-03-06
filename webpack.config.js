const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

let config = {
  entry: ["babel-polyfill", "./src/index.js"],

  output: {
    path: path.join(__dirname, "dist"),
    hashFunction: "xxhash64",
    filename: "index.js",
  },

  module: {
    rules: [
      {
        test: /\.js?$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.png$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
            },
          },
        ],
      },
    ],
  },

  resolve: {
    extensions: [".js"],
    alias: {
      "@source": path.resolve(__dirname, "src/"),
    },
  },

  plugins: [
    new CopyPlugin({
      patterns: [{ from: "./public/index.html", to: "./index.html" }],
      patterns: [{ from: "./public/res", to: "./res" }],
    }),
  ],
};

// Export config dynamically to allow dev mode
module.exports = (env, argv) => {
  if (argv.mode === "development") {
    config.devtool = "source-map";
    config.output.path = path.join(__dirname, "dist_dev");
  }
  return config;
};
