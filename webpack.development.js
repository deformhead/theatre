const path = require('path');

const merge = require('webpack-merge');

const SourceMapDevToolPlugin = require('webpack').SourceMapDevToolPlugin;
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const common = require('./webpack.common.js');

module.exports = merge(common, {

    'plugins': [

        new SourceMapDevToolPlugin(),
        new UglifyJSPlugin({

            'sourceMap': true
        })
    ]
});
