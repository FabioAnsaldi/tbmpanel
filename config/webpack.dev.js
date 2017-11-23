/**
 * Created by fabio.ansaldi on 10/11/2017.
 */

'use strict';
const webpack = require( 'webpack' );
const merge = require( 'webpack-merge' );
const common = require( './webpack.common.js' );

module.exports = merge( common, {
    devtool: 'cheap-module-eval-source-map',
    entry: [
        'webpack-hot-middleware/client'
    ],
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
} );