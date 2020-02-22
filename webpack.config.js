const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: "development",

  module: {
    rules: [
      // JS
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      // Loading CSS
      {
        test: /\.(css)$/,
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader,  'css-loader']
      },
      // Loading SASS/SCSS
      {
        test: /\.(scss|sass)$/,
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },
      // Loading images
      {
        test: /\.(png|jpg|jpeg|gif|ico)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'images',
              name: '[name]-[sha1:hash:7].[ext]'
            }
          }
        ]
      },
      // Loading fonts
      {
        test: /\.(ttf|otf|eot|woff|woff2)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'fonts',
              name: '[name].[ext]'
            }
          }
        ]
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Hello world',
      buildTime: new Date().toDateString(),
      template: 'public/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'main-[hash:8].css'
    })
  ]
};