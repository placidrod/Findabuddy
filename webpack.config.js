var path = require('path');

module.exports = {
  entry: './map-view.jsx',
  context: path.resolve(__dirname, 'public'),
  output: {
    filename: 'map-view.js',
    path: path.resolve(__dirname, 'public/components/compiled')
  },
  devtool: 'source-map',
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['react', 'es2015'],
        },
      },
    }],
  },
}