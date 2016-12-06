const webpack = require('webpack');
const helpers = require('./helpers');
const path = require('path');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpack = require('html-webpack-plugin');
const CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;

const ENV = process.env.ENV = process.env.NODE_ENV = 'development';
const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 3000;

module.exports = {
  debug: true,
  devtool: 'source-map',
  entry: {
    polyfills: [ helpers.root('src', 'polyfills.ts') ],
    vendor: [ helpers.root('src', 'vendor.ts') ],
    app: [ helpers.root('src', 'index.ts') ]
  },
  output: {
    filename: '[name].bundle.js',
    path: helpers.root('dist')
  },
  resolve: {
    extensions: ['', '.js', '.ts'],
    root: helpers.root('src'),
    modulesDirectories: ['node_modules']
  },
  devServer: {
    port: PORT,
    host: HOST,
    contentBase: helpers.root('dist'),
    historyApiFallback: true,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    }
  },
  plugins: [
    new HtmlWebpack({
      template: 'src/index.html',
      inject: 'body'
    }),
    new CommonsChunkPlugin({
      name: ['polyfills', 'vendor'].reverse()
    }),
    new ExtractTextPlugin('[name].css'),
  ],
  module: {
    preLoaders: [
      { test: /\.ts$/, loader: 'tslint-loader' }
    ],
    loaders: [
      { test: /\.ts$/, loader: 'ts' },
      { test: /\.html$/, loader: 'raw', exclude: [helpers.root('src/index.html')] },
      { test: /\.css$/,  loader: ExtractTextPlugin.extract('style', 'css') },
      { test: /\.(jpe?g|png|gif)$/, loader: 'url?limit=10000&name=images/[name].[ext]' },
      {
        test: /\.(woff(\?.*)?|woff2(\?.*)?|svg(\?.*)?|ttf(\?.*)?|eot(\?.*)?)$/,
        loader: 'url?name=fonts/[name].[ext]'
      }
    ]
  }
}