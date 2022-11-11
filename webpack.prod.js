const path = require('path')
const { merge } = require('webpack-merge')
const webpackCommon = require('./webpack.common')

module.exports = merge(webpackCommon, {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'akriti.js',
    libraryTarget: 'umd',
    library: 'Akriti',
  },
})
