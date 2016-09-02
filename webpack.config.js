const path = require('path');
const plugins = require('./webpack/plugins');
const loaders = require('./webpack/loaders');

const devmode = process.env.NODE_ENV !== 'production';

module.exports = {
  entry: {
    app: './client/index.js',
  },

  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[chunkhash].js',
    // sourceMapFilename: '[name].[chunkhash].js.map',
  },

  devtool: !devmode ? 'source-map' : 'inline-source-map',

  plugins: plugins,

  module: {
    loaders: [
      // loaders.css,
      loaders.js,
    ],
  }

};
