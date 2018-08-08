const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        app: "./src/scripts/main.ts"
    },
    devtool: "inline-source-map",
    devServer: {
        contentBase: "./dist/",
        hot: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    mode: "development",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};