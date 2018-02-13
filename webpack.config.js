const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './www/src/js/app.js',
    output: {
        path: path.resolve(__dirname, 'www/dist/js'),
        filename: 'bundle.js',
    
    },            
    devServer: {
        contentBase: path.join(__dirname, "www"),
        compress: true,
    },
    module: {
        rules: [{
            test: /\.scss$/,
            use: [{
                loader: "style-loader"
            }, {
                loader: "css-loader"
            }, {
                loader: "sass-loader"
            }]
        }]
    }              
};
