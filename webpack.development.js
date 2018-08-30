const merge = require('webpack-merge');
const SourceMapDevToolPlugin = require('webpack').SourceMapDevToolPlugin;

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

        new SourceMapDevToolPlugin()
    ]
});
