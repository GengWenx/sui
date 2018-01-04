var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    module: {
        rules: [{
            test: /\.less$/,
            loader: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: 'css-loader!less-loader'
            }),
        }, {
            test: /\.(woff|svg|ect|ttf)$/i,
            loader: 'url-loader',
        }, ]
    },

    entry: {
        sui: './src/less/sui.less'
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "[name].bak.js"
    },

    plugins: [
        new ExtractTextPlugin("[name].css", {
            allChunks: false
        }),
    ]

};