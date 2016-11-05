var webpack = require("webpack");
var path = require('path');

module.exports = {

  entry: {
    app: "./src/main.js"
  },

  output: {
    path: path.join(__dirname, "dist"),
    publicPath: '/',
    filename: '[name].js'
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ],

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
}