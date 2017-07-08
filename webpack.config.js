'use strict'

require('dotenv').config({path: `${__dirname}/.dev.env`})

const webpack = require('webpack')
const HtmlPlugin = require('html-webpack-plugin')
const CleanPlugin = require('clean-webpack-plugin')
const ExtractPlugin = require('extract-text-webpack-plugin')

let production = process.env.NODE_ENV === 'production'

let plugins = [
  new ExtractPlugin('bundle-[hash].css'),
  new HtmlPlugin({
    title: 'slugbyte',
  }),
  new webpack.DefinePlugin({
    __DEBUG__: JSON.stringify(!production),
    __API_URI__: JSON.stringify(process.env.API_URL),
  }),
]

if(production)
  plugins = plugins.concat([
    new CleanPlugin(),
  ])

module.exports = {
  plugins,
  entry: `${__dirname}/src/main.js`,
  output: {
    path: `${__dirname}/build`,
    filename: 'bundle-[hash].js',
    publicPath: process.env.CDN_URL,
  },
  devtool: production ? undefined : 'eval',
  devServer: { historyApiFallback: true },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.scss$/,
        loader: ExtractPlugin.extract(['css-loader', 'sass-loader']),
      },
    ],
  },
}
