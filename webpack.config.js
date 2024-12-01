const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
		main: './src/index.js'
	},
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, './dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  
  plugins: [
		new HtmlWebpackPlugin({
			title: 'webpack',
			template: path.resolve(__dirname, './src/template.html'),
			filename: 'index.html',
		}),
		new CleanWebpackPlugin(),
  ],
};