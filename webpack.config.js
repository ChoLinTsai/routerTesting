const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const isProd = process.env.NODE_ENV === 'production';

const cssDev = require('./webpack.dev.js');
const cssProd = require('./webpack.prod.js');

const cssConfig = isProd ? cssProd : cssDev;

module.exports = {
  output: {
    path: path.resolve(__dirname, 'docs/')
  },
  optimization: {
    minimizer: [
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: cssConfig
      },
      {
        test: /\.(png|jpg|gif|mp4|ogg|svg|woff|woff2|ttf|eot)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/'
            }
          },
          // {
          //   loader: "image-webpack-loader"
          // }
        ]
      },
    ]
  },
  devServer: {
    stats: "errors-only",
    historyApiFallback: true,
  },
  performance: {
    hints: false
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './index.html'
    }),
    // new ExtractTextPlugin({
    //   filename: './css/[name].css',
    //   disable: !isProd,
    //   allChunks: true
    // }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      disable: !isProd,
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ]
}


console.log(isProd ? 'It is Production' : 'It is Devolopment');
