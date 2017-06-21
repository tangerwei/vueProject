const path = require('path');
const webpack = require('webpack')
const html = require('html-webpack-plugin');

module.exports = {
    entry: {
        index:'./src/index.js'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        // publicPath: '/assets/',
        filename: '[name].js'
    },
    plugins: [new html({
        title: 'haha',
        template: path.resolve(__dirname, './src/index.html'),
        filename:'index.html'
    })],
    module: {
        loaders: [{
            test: /\.vue$/,
            loader: 'vue-loader'
        }, {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        }, {
            test: /\.css$/,
            loader: 'style-loader!css-loader'
        }, {
            test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
            loader: 'file-loader'
        }, {
            test: /\.(png|jpe?g|gif|svg)(\?\S*)?$/,
            loader: 'file-loader',
            query: {
                name: '[name].[ext]?[hash]'
            }
        }]
    },
    devServer: {
        historyApiFallback: true,
        noInfo: true
    },
    devtool: '#enval-source-map'
}
console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV === 'production') {
    module.exports.devtool = '#source-map'
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ])
}