const LodashModuleReplacementPlugin = require("lodash-webpack-plugin");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const {VueLoaderPlugin} = require("vue-loader");

const webpack = require("webpack");

const cwd = require("./build.config").cwd;

module.exports = {
	entry: {
		src: "./src/main.js"
	},
	resolve: {
		extensions: [".js", ".vue", ".css", ".json"],
		alias: {
			vue$: "vue/dist/vue.runtime.esm.js"
		},
		modules: [cwd("node_modules"), cwd("src")]
	},
	optimization: {
		runtimeChunk: "single",
		mangleWasmImports: true,
		removeAvailableModules: true,
		splitChunks: {
			chunks: "all",
			maxInitialRequests: 5,
			minSize: 40000,
			enforceSizeThreshold: 200000,
			cacheGroups: {
				vendor: {
					test: /[\\/]node_modules[\\/]/,
					reuseExistingChunk: true,
					name(module, chunks, cacheGroupKey) {
						// get the name. E.g. node_modules/packageName/not/this/part.js
						// or node_modules/packageName
						const packageName = module.context.match(
							/[\\/]node_modules[\\/](.*?)([\\/]|$)/
						)[1];

						// npm package names are URL-safe, but some servers don't like @ symbols
						return `${cacheGroupKey}/${packageName.replace("@", "")}`;
					}
				}
			},
			fallbackCacheGroup: {
				maxSize: 200000,
				automaticNameDelimiter: "."
			}
		}
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: "vue-loader"
			},
			{
				test: /\.css$/,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: "css-loader",
						options: {
							importLoaders: 1
						}
					},
					"postcss-loader"
				]
			},
			{
				test: /\.js$/,
				use: {
					loader: "babel-loader",
					options: {
						plugins: ["lodash"]
					}
				},
				exclude: [/node_modules/]
			},
			{
				test: /\.(ico|jpe?g|png|gif)(\?.*)?$/,
				loader: "url-loader",
				options: {
					limit: 10000,
					fallback: "file-loader",
					name: "static/[name].[contenthash:8].[ext]"
				}
			},
			{
				test: /\.(svg|eot|otf|webp|ttf|woff|woff2)(\?.*)?$/,
				loader: "file-loader",
				options: {
					name: "static/[name].[contenthash:8].[ext]"
				}
			}
		]
	},
	plugins: [
		new VueLoaderPlugin(),
		new MiniCssExtractPlugin({
			filename: "styles.[contenthash:8].css",
			chunkFilename: "styles.[contenthash:8].css"
		}),
		new LodashModuleReplacementPlugin({
			shorthands: true
		}),
		new webpack.ids.HashedModuleIdsPlugin()
	]
};
