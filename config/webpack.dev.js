/**
 * Created by fabio.ansaldi on 10/11/2017.
 */

'use strict';
const webpack = require( 'webpack' );
const merge = require( 'webpack-merge' );
const common = require( './webpack.common.js' );

module.exports = merge( common, {
    devtool: 'cheap-module-source-map',
    entry: [],
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin( {
            'process.env': {
                'NODE_ENV': JSON.stringify( 'development' )
            }
        } )
    ]
} );
