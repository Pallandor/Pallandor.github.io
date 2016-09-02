const path = require('path');
const plugins = require('./webpack/plugins');


module.exports = {
  entry: {
    app: './client/index.js',
  },

  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[chunkhash].js',
    sourceMapFilename: '[name].[chunkhash].js.map',
  },

  plugins: 

};