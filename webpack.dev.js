const cssDev = [
  {
    loader: 'style-loader'
  },
  {
    loader: 'css-loader',
    options: {
      modules: false,
      importLoaders: 5,
      minimize: true,
    }
  },
  {
    loader: 'postcss-loader'
  },
  {
    loader: 'sass-loader'
  },
  {
    loader: 'sass-resources-loader',
    options: {
      resources: './src/resources/*.scss'
    }
  }
]


module.exports = cssDev;
