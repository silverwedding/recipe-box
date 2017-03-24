var webpack = require("webpack");
var path = require("path");
var CompressionPlugin = require("compression-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSass = new ExtractTextPlugin({
    filename: "[name].[contenthash].css",
    disable: process.env.NODE_ENV === "development"
});

var BUILD_DIR = path.resolve(__dirname, "src/client/public");
var APP_DIR = path.resolve(__dirname, "src/client/app");

module.exports = {
    entry: APP_DIR + "/app.js",
    output: {
        path: BUILD_DIR,
        filename: "app.bundle.js"
    },
    module: {
        loaders: [{
            test: /\.js$/,
            include: APP_DIR,
            exclude: /node_modules/,
            loader: "babel-loader"
        }, {
            test: /\.jsx$/,
            include: APP_DIR,
            exclude: /node_modules/,
            loader: "babel-loader"
        }, {
            test: /\.scss$/,
            use: extractSass.extract({
                use: [{
                    loader: "css-loader"
                }, {
                    loader: "sass-loader"
                }],
                // use style-loader in development
                fallback: "style-loader"
            })
        }]
    },
    resolve: {
        extensions: ["", ".js", ".jsx"]
    },
    // Configure webpack to import React when it is referenced
    // in a module that doesn't explicitly import it
    // (e.g. stateless component functions)
    plugins: [
        extractSass,
        new webpack.ProvidePlugin({
            "React": "react"
        }),
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("production")
            }
        }),
        new webpack.optimize.CommonsChunkPlugin("common.js"),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.AggressiveMergingPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            mangle: true,
            compress: {
                warnings: false, // Suppress uglification warnings
                pure_getters: true,
                unsafe: true,
                unsafe_comps: true,
                screw_ie8: true
            },
            output: {
                comments: false
            },
            exclude: [/\.min\.js$/gi] // skip pre-minified libs
        }),
        new CompressionPlugin({
            asset: "[path].gz[query]",
            algorithm: "gzip",
            test: /\.js$|\.css$|\.html$/,
            threshold: 10240,
            minRatio: 0
        })
    ]
};
