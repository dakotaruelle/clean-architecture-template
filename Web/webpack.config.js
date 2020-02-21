'use strict'
const path = require('path');

module.exports = {
    entry: './Client/index.js',
    
    output: {
        path: path.resolve(__dirname, 'wwwroot/js'),
        filename: 'index.min.js'
    },

    mode: "development",
};