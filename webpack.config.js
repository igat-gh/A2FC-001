const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: path.resolve(__dirname + '/src/index.ts'),
  output: {
    filename: path.resolve(__dirname + '/dist/bundle.js')
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['', '.ts']
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin()
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