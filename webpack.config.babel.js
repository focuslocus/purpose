import { resolve } from 'path';

module.exports = {
  entry: './app/index.js',
  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/,
      }
    ],
  },
  resolve: {
    extensions: ['.js', '.css'],
  },
  devServer: {
    contentBase: resolve(__dirname, 'public'),
  },
};
