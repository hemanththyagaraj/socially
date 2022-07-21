const HtmlWebpackPlugin = require('html-webpack-plugin')

const currentDirectory = __dirname || process.cwd()

module.exports = {
    entry: currentDirectory + '/client/src/index.js',
    target: ["web", "es5"],
    mode: 'development',
    devServer: {
        port: 3000,
    },
    output: {
        path: currentDirectory + '/build',
        filename: 'js/bundle.[chunkhash].js'
    },
    module: {
        rules: [
            { test: /\.(js|jsx)$/, use: 'babel-loader', exclude: /node_modules/, }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: currentDirectory + '/client/public/index.html'
        })
    ]
}