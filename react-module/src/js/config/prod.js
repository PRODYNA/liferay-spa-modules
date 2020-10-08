// production config
const merge = require('webpack-merge');
const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const SRC = resolve(__dirname, '../app');
const DEST = resolve(__dirname, '../../main/resources/META-INF/resources/dist');

const commonConfig = require('./common');

module.exports = merge(commonConfig, {
  mode: 'production',
  entry: {
    app: SRC + '/index.js',
  },
  output: {
    path: DEST,
    filename: 'webpack.bundle.prod.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: '../../src/main/resources/META-INF/resources/view.jsp',
      filename: 'index.html',
      inject: 'body',
    }),
  ],
});
