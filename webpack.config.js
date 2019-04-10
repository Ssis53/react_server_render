const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    bundle: './public/javascripts/reactApp/index.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /.woff|.woff2|.svg|.eot|.ttf/,
        use: 'url-loader?prefix=font/&limit=10000'
      }
    ],  
  },
  devServer: {
    hot: true,
    host: 'localhost',
    port: 3000,
    open: true,
    historyApiFallback: true
  },
  plugins: [
    // new ExtractTextPlugin('index.css')
  ]
}