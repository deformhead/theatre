const path = require('path');

const merge = require('webpack-merge');

const JavaScriptObfuscator = require('webpack-obfuscator');
const SourceMapDevToolPlugin = require('webpack').SourceMapDevToolPlugin;
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const common = require('./webpack.common.js');

module.exports = merge(common, {

    'module': {

        'rules': [

            {
                'test': /\.ogg|\.png|\.wav$/,
                'use': [

                    {'loader': 'url-loader'}
                ]
            }
        ]
    },
    'plugins': [

        new SourceMapDevToolPlugin(),
        new UglifyJSPlugin({

            'sourceMap': true
        })
    ]
});
