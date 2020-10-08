const merge = require('webpack-merge');
const webpack = require('webpack');
const { resolve, join } = require('path');
const commonConfig = require('./common');

const port = process.env.PORT || 8081;

module.exports = merge(commonConfig, {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  entry: [
    'react-hot-loader/patch',
    `webpack-dev-server/client?http://localhost:${port}`,
    'webpack/hot/only-dev-server',
    '../app/index.js',
  ],
  output: {
    path: resolve(join(__dirname, 'build')),
    filename: 'webpack.bundle.js',
    publicPath: '/o/react-portlet-web/',
  },
  devServer: {
    overlay: true,
    open: false,
    hot: true,
    port,
    historyApiFallback: true,
    disableHostCheck: true,
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /src\/js\/app\/.*\.js$/,
        loader: 'eslint-loader',
        exclude: /src\/js\/app\/node_modules/,
        options: {
          failOnError: false,
          emitWarning: true,
        },
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.NamedModulesPlugin(),
  ],
});
