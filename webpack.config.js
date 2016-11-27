const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: path.join(__dirname + '/index.ts'),
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['', '.ts']
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new CopyWebpackPlugin([
      {
        from: path.join(__dirname + '/assets'),
        to: path.join(__dirname + '/dist'),
      }
    ])
  ],
  module: {
    preLoaders: [
      { test: /\.ts$/, loader: 'tslint-loader' }
    ],
    loaders: [
      { test: /\.ts$/, loader: 'ts' }
    ]
  }
}