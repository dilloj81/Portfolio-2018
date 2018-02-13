const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
    entry: './www/src/js/app.js',
    output: {
        path: path.resolve(__dirname, './www/dist/js'),
        filename: 'bundle.js',
    
    },
    plugins: [
        new BrowserSyncPlugin({
        // browse to http://localhost:3000/ during development,
        // ./public directory is being served
            host: 'localhost',
            port: 3000,
            server: { baseDir: ['www'] }
        })
    ],    
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
