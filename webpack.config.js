var ExtractTextPlugin = require("extract-text-webpack-plugin");

 module.exports = {
     output: {
         filename: 'main.js'
     },
     module: {
        loaders: [
            { test: /\.less$/, loader: ExtractTextPlugin.extract(['raw', 'less']) },
            {test: /\.(png|jpg|jpeg|gif|svg)$/, loaders: ['url-loader?limit=10000']},
            {test: /\.html$/, loaders: ['html-loader']},
        ]
    },
    plugins: [
        new ExtractTextPlugin("main.css")
    ]
 };