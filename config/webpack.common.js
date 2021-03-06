/**
 * Created by fabio.ansaldi on 10/11/2017.
 */

'use strict';
const path = require( 'path' );
const config = require( './tbmpanel.config.js' );
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );

module.exports = {
    entry: [
        path.join( process.cwd(), config.paths.source + '/index' )
    ],
    output: {
        path: path.join( process.cwd(), config.paths.build ),
        filename: config.paths.bundle,
        publicPath: config.paths.assets
    },
    plugins: [
        new HtmlWebpackPlugin( {
            template: path.join( process.cwd(), config.paths.source + '/index.html' ),
            inject: 'body'
        } )
    ],
    module: {
        rules: [ {
            test: /\.(jpe?g|gif|png|svg|ico)$/,
            use: [ {
                loader: 'file-loader'
            } ]
        }, {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: [ {
                loader: 'babel-loader',
                query: {
                    presets: [ 'react', 'es2015' ]
                }
            } ]
        } ],
        loaders: [ {
            test: /\.css$/,
            loaders: [ 'style-loader', 'css-loader' ]
        } ]
    }
};
