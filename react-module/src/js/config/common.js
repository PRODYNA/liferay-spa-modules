const webpack = require('webpack');

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      'react-dom': '@hot-loader/react-dom'
    }
  },
  module: {
    rules: [
      {
        test: /src\/js\/app\/.*\.js$/,
        use: 'babel-loader',
        exclude: /src\/js\/app\/node_modules/,
      },
      {
        test: /src\/js\/app\/.*\.(scss|sass)/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'window.com.whatever': {
        API_URL: JSON.stringify(
          process.env.API_URL || 'https://google.com'
        ),
      },
    }),
  ],
};
