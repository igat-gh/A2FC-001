const webpack = require('webpack');

module.exports = {
  entry: './src/index.ts',
  output: {
    filename: './dist/bundle.js'
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