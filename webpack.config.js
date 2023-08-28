const TerserPlugin = require("terser-webpack-plugin");
const { merge } = require('webpack-merge');
const path = require('path');

module.exports = merge({
	mode:'production',
	entry: {
		index:{
			import:'./src/demo.js',
		},
	},
	output: {
		path: path.resolve(__dirname, 'dist/build'),
		filename: 'demo.js',
	},
	optimization: {
		minimize: true,
		minimizer: [new TerserPlugin()],
	},
	resolve: {
		fallback: {
			path: require.resolve("path-browserify"),
			fs: false,
		}
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				loader: 'babel-loader'
			},
		]
	},

	devServer: {
		static: {
			directory: path.join(__dirname, 'public'),
		},
		compress: true,
		port: 9101,
	},

},{
	mode: 'production',
});
