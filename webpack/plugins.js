const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const SplitByPathPlugin = require('webpack-split-by-path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const basePlugins = [
  new webpack.DefinePlugin({
    __DEV__: process.env.NODE_ENV !== 'production',
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
  }),
  new HtmlWebpackPlugin({
    template: './client/index.html',
    inject: 'body',
  }),
  new webpack.NoErrorsPlugin(),
  new CopyWebpackPlugin([
    { from: 'client/assets', to: 'assets' },
  ]),
];

const prodPlugins = [
  new SplitByPathPlugin([{
    name: 'vendor',
    path: path.join(__dirname, '..', 'node_modules/'),
  }]),
  new webpack.optimize.UglifyJsPlugin({
    sourceMap: true,
    compress: {
      screw_ie8: true,
      warnings: false,
    },
  }),
];

const devPlugins = [];

module.exports = basePlugins
  .concat(process.env.NODE_ENV === 'production' ? prodPlugins : [])
  .concat(process.env.NODE_ENV === 'development' ? devPlugins : []);
