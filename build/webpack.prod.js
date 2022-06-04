const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");

const {merge} = require("webpack-merge");

const webpackBaseConfig = require("./webpack.base");

const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const TerserPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");

module.exports = merge(webpackBaseConfig, {
	mode: "production",
	output: {
		path: path.resolve(__dirname, "../dist"),
		filename: "[name].[contenthash:8].js",
		publicPath: "./"
	},
	performance: {
		hints: "warning"
	},
	optimization: {
		providedExports: true,
		sideEffects: true,
		minimize: true,
		minimizer: [
			new TerserPlugin({
				parallel: true,
				terserOptions: {
					output: {
						comments: false
					}
				},
				extractComments: false
			}),
			new CssMinimizerPlugin({
				minimizerOptions: {
					preset: [
						"default",
						{
							discardComments: {removeAll: true}
						}
					]
				}
			})
		]
	},
	plugins: [
		new BundleAnalyzerPlugin({
			analyzerMode: "static"
		}),
		new CleanWebpackPlugin({
			cleanOnceBeforeBuildPatterns: [path.resolve(__dirname, "../dist")]
		}),
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, "../index.html"),
			filename: path.join(__dirname, "../dist/index.html")
		})
	]
});
