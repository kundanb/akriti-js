const path = require('path')
const { merge } = require('webpack-merge')
const webpackCommon = require('./webpack.common')

module.exports = merge(webpackCommon, {
  mode: 'development',
  devServer: {
    static: {
      directory: path.join(__dirname, 'test'),
    },
    port: 3030,
  },
  output: {
    path: path.resolve(__dirname, 'test'),
    filename: 'akriti.js',
    libraryTarget: 'umd',
    library: 'Akriti',
  },
})
