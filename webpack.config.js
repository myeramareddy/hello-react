var webpack = require('webpack');
var path = require('path');

module.exports = {
	devtool: 'inline-source-map', //gives up line numbers in case of errors
	entry: [ //define where webpack is going to look for our files
		'webpack-dev-server/client?http://127.0.0.1:8080/',
		'webpack/hot/only-dev-server', //for live reloading
		'./src' //the folder where webpack is going to look for the initial file to run, by default looking for index.js
	],
	output: { //where webpack will output our files(for prod)
		path: path.join(__dirname, 'public'),
		filename: 'bundle.js'
	},
	resolve: { //where webpack is goung to look for the files to bundle together
		modulesDirectories: ['node_modules', 'src'],
		extensions: ['', '.js']
	},
	module: { //where we define our loaders
		loaders: [
			{   //only one loader to recognize js files
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loaders: ['react-hot', 'babel?presets[]=react,presets[]=es2015'] //modules that we install to help load our app
			}
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(), //for live reloading
		new webpack.NoErrorsPlugin() //so webpack wont compile if there are errors
	]

}