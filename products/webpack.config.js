const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  mode: "development",
  devServer: {
    port: 8081,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "products",
      filename: "remoteEntry.js", // lists the different modules that can be loaded from the Products project
      exposes: {
        "./ProductsIndex": "./src/index",
      },
      shared: ["faker"], // if remotes use the same dependency, this will only load it once, but might break if loading these modules independently
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
