import webpack from 'webpack'
import { resolve } from 'path'

module.exports = () => {

  return {
    entry: './app/index.js',
    output: {
      path: resolve(__dirname, 'dist'),
      filename: 'bundle.js'
    },
    module: {
      rules: [
        {
          enforce: 'pre',
          use: 'eslint-loader',
          test: /\.js$/,
          exclude: /node_modules/
        },
        {
          use: 'babel-loader',
          test: /\.js$/
        }
      ]
    },
    resolve:{
      extensions: ['.js', '.css']
    },
    devServer: {
      contentBase: resolve(__dirname, 'public')
    }
  }
}
