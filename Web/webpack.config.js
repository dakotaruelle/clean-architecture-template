'use strict'
const path = require('path');
const pnpWebpackPlugin = require('pnp-webpack-plugin');

module.exports = {
    entry: './Client/index.ts',

    output: {
        path: path.resolve(__dirname, 'wwwroot/js'),
        filename: 'index.min.js'
    },

    mode: "development",

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader"
            }
        ]
    },

    resolve: {
        plugins: [
            pnpWebpackPlugin,
        ],
    },

    resolveLoader: {
        plugins: [
            pnpWebpackPlugin.moduleLoader(module),
        ],
    },
};