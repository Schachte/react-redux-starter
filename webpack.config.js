var path = require('path');
module.exports = {
  entry: ['./src/index.js'],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015', 'stage-1']
        }
      }
    ]
  },
  resolve: {
    extensions: [
      '', '.js', '.jsx'
    ],
    alias: {
      src: path.resolve('./src')
      // test: path.resolve('./test'),
      // css: path.resolve('./styles/css'),
      // img: path.resolve('./styles/img')
    }
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};
