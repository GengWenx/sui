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
            test: /\.(woff|woff2|svg|eot|ttf)\??.*$/,
            loader: 'file-loader?name=fonts/[name].[ext]',
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
        new ExtractTextPlugin("css/[name].css", {
            allChunks: false
        }),
    ]

};