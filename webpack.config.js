const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: 'development',
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
    assetModuleFilename: 'images/[name][ext][query]',
    clean:true,
  },
  plugins: [
      new HtmlWebpackPlugin({
            template:'./src/index.html',
            inject:true,
  })],
  module: {
      rules: [
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
        {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type:'asset/resource',
          },
      ],
    },
    devServer:{
      static: './dist/index.html',
    },
};
