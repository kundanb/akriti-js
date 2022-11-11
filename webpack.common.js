const path = require('path')

module.exports = {
  entry: path.resolve(__dirname, 'src/Akriti.ts'),
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: 'ts-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
}
