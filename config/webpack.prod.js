/**
 * Created by fabio.ansaldi on 10/11/2017.
 */

'use strict';
const webpack = require( 'webpack' );
const merge = require( 'webpack-merge' );
const common = require( './webpack.common.js' );
const uglifyJSPlugin = require( 'uglifyjs-webpack-plugin' );

module.exports = merge( common, {
    plugins: [
        new uglifyJSPlugin( {
            uglifyOptions: {
                compress: {
                    keep_fnames: true
                },
                mangle: {
                    keep_fnames: true
                }
            }
        } ),
        new webpack.DefinePlugin( {
            'process.env': {
                'NODE_ENV': JSON.stringify( 'production' )
            }
        } )
    ]
} );
