module.exports = {
  entry: './src/index',
  output: {
    path: '///Users/ilyabeylin/ACME/Acme-WarmUp/dist',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
};
