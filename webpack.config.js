const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: ['webpack-hot-middleware/client','./src/index.js'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/static/'
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  module: {
    rules: [
      {
        test: [/\.js$/, /\.jsx?$/],
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/env', '@babel/react', ]
        }
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'raw-loader'],
        include: __dirname
      }
    ],
  }
}