const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: '../build',
    hot: true,
    compress: true,
    open: true,
    overlay: true,
    port: 3000,
  },
});