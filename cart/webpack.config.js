const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  mode: "development",
  devServer: {
    port: 8082,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "cart",
      filename: "remoteEntry.js",
      exposes: {
        "./CartShow": "./src/bootstrap",
      },
      shared: ["faker"], // if remotes use the same dependency, this will only load it once, but might break if loading these modules independently
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
