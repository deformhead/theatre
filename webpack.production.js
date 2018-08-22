const path = require('path');

const webpack = require('webpack');
const merge = require('webpack-merge');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const JavaScriptObfuscator = require('webpack-obfuscator');
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

        new HtmlWebpackPlugin({

            'minify': {

                'collapseWhitespace': true,
                'removeComments': true
            },
            'title': 'Theatre'
        }),
        new JavaScriptObfuscator(),
        new UglifyJSPlugin({

            'sourceMap': false
        })
    ]
});
