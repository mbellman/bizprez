module.exports = {
	entry: "./src/index.ts",
	output: {
		path: __dirname + "/dist",
		filename: "app.js"
	},
	resolve: {
		extensions: [".ts"]
	},
	module: {
		"loaders": [
			{ test: /\.ts/, loader: "ts-loader" }
		]
	}
};
