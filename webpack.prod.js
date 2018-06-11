const MiniCssExtractPlugin = require("mini-css-extract-plugin");


const cssProd = [
    MiniCssExtractPlugin.loader,
    {
      loader: 'css-loader',
        options: {
          modules: false,
          importLoader: 4,
          minimize: true,
        }
    },
    {
      loader: 'postcss-loader',
    },
    {
      loader:'sass-loader',
    },
    {
      loader: 'sass-resources-loader',
      options: {
        resources: './src/resources/*.scss'
      }
    },
    
    
    

    // {
    //   loader: 'css-loader',
    //   options: {
    //     modules: true,
    //     importLoaders: 2,
    //     minimize: true
    //   }
    // },
    // {
    //   loader: 'postcss-loader'
    // },
    // {
    //   loader: 'sass-loader'
    // },
    // {
    //   loader: 'sass-resources-loader',
    //   options: {
    //     resources: './src/resources/*.scss'
    //   }
    // }

]


module.exports = cssProd;
