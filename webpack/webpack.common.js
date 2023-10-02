const path = require('path');
const webpack = require('webpack');
const src = path.join(__dirname, '../src');
const dotenv = require('dotenv').config({
  path: path.join(__dirname, '../.env')
});

const isProduction = typeof NODE_ENV !== 'undefined' && NODE_ENV === 'production';

module.exports = {
  entry: src,
  output: {
    publicPath: '/',
    path: path.resolve('dist'),
    filename: '[name].[hash].bundle.js',
    chunkFilename: '[name].[hash].bundle.js',
    assetModuleFilename: 'assets/[hash][ext][query]'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          compilerOptions: {
            "sourceMap": !isProduction,
          }
        }
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
        options: { minimize: true }
      },
      {
        type: 'javascript/auto',
        test: /\.json$/,
        exclude: /node_modules/,
        loader: 'json-loader'
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(svg|woff|woff2|ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader',
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": dotenv.parsed
    }),
  ],
  resolve: {
    modules: [src, 'node_modules'],
    extensions: [".ts", ".tsx", ".js"],
  },
}