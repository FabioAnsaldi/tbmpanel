/**
 * Created by fabio.ansaldi on 10/11/2017.
 */

'use strict';
const path = require( 'path' );
const webpack = require( 'webpack' );
const config = require( './tbmpanel.config.js' );

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: [
        'webpack-hot-middleware/client',
        path.join( process.cwd(), config.paths.source + '/index' )
    ],
    output: {
        path: path.join( process.cwd(), config.paths.production ),
        filename: config.paths.bundle,
        publicPath: config.paths.development
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin( {} ),
    ],
    module: {
        rules: [ {
            test: /\.(jpe?g|gif|png|svg|ico)$/,
            use: [ {
                loader: 'file-loader',
                options: {}
            } ]
        }, {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: [ {
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                }
            } ]
        } ],
        loaders: [ {
            test: /\.css$/,
            loaders: [ 'style-loader', 'css-loader' ]
        } ]
    }
};