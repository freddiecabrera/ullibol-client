const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: [
    './src/app'
  ],
  devtool: 'eval-source-map',
  output: {
    path: __dirname,
    filename: 'bundle.js',
    publicPath: '/js/'
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: true
  },
  preLoaders: [
    {
      test: /\.js?$/,
      loader: 'eslint-loader'
    }
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'src')
    }]
  }
}
