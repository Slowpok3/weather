const path = require('path');
const { experiments } = require('webpack');

module.exports = {
  entry: './src/index',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ],
      },
    ],
  },
  experiments: {
    topLevelAwait: true,
  },
};

