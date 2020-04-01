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
            },

            {
                test: /\.vue$/,
                loader: "vue-loader"
            }
        ]
    },

    resolve: {
        plugins: [
            pnpWebpackPlugin,
        ],

        alias: {
            'vue$': 'vue/dist/vue.esm.js',
        },
    },

    resolveLoader: {
        plugins: [
            pnpWebpackPlugin.moduleLoader(module),
        ],
    },
};