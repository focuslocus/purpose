import webpack from 'webpack'
import { resolve } from 'path'

module.exports = () => {

  return {
    entry: './app/app.js',
    output: {
      path: resolve(__dirname, 'dist'),
      filename: 'bundle.js'
    },
    module: {
      rules: [
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
