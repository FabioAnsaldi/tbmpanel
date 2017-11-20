/**
 * Created by fabio.ansaldi on 10/11/2017.
 */

'use strict';
const merge = require( 'webpack-merge' );
const common = require( './webpack.common.js' );
const uglifyJSPlugin = require( 'uglifyjs-webpack-plugin' );

module.exports = merge( common, {
    plugins: [
        new uglifyJSPlugin()
    ]
} );
