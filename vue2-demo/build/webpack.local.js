const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");

const webpack = require("webpack");
const {merge} = require("webpack-merge");

const webpackBaseConfig = require("./webpack.base");

module.exports = merge(webpackBaseConfig, {
	mode: "development",
	output: {
		path: path.resolve(__dirname, "../dist"),
		filename: "[name].[hash:8].js",
		publicPath: "/"
	},
	performance: {
		hints: false
	},
	devServer: {
		static: {
			directory: path.resolve(__dirname, "../dist")
		},
		historyApiFallback: true,
		allowedHosts: "all",
		hot: true,
		host: "0.0.0.0",
		port: 4000,
		proxy: {
			"/v1/**": {
				target: "http://localhost:8081"
			}
		}
	},
	devtool: "source-map",
	plugins: [
		new HtmlWebpackPlugin({
			title: "",
			template: path.resolve(__dirname, "../index.html"),
			filename: path.join(__dirname, "../dist/index.html")
		}),
		new webpack.HotModuleReplacementPlugin()
	]
});
