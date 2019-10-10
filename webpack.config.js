const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: {
    middleware: 'webpack-hot-middleware/client',
    app: './src/index.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist/static/'),
    publicPath: '/static/',
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  module: {
    rules: [
      {
        test: [/\.js$/, /\.jsx?$/],
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/env', '@babel/react'],
          plugins: ['@babel/plugin-transform-runtime'],
        },
      },
      {
        test: [/\.css$/],
        loaders: ['style-loader', 'css-loader'],
        include: __dirname,
      },
    ],
  },
};
