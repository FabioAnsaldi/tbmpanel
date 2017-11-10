/**
 * Created by fabio.ansaldi on 10/11/2017.
 */

'use strict';
const path = require( 'path' );
const webpack = require( 'webpack' );
const webpackDevMiddleware = require( 'webpack-dev-middleware' );
const webpackHotMiddleware = require( 'webpack-hot-middleware' );
const config = require( '../config/tbmpanel.config.js' );
const webpackConfig = require( path.join( process.cwd(), config.paths.configuration + '/webpack.config' ) );
const express = require( 'express' );
const app = new (express)();

/* Environment configuration constant */
const port = config.environment.develop.port || 9000;
const address = config.environment.develop.address || 'localhost';
process.env.NODE_ENV = config.environment.develop.env;
const compiler = webpack( webpackConfig );

app.use( webpackDevMiddleware( compiler, { noInfo: true, publicPath: webpackConfig.output.publicPath } ) );
app.use( webpackHotMiddleware( compiler ) );

app.get( '/', function ( req, res, next ) {
    res.sendFile( path.join( process.cwd(), config.paths.source + '/index.html' ) );
} );

app.set( 'address', address );
app.listen( port, function ( err ) {
    if ( err ) {
        console.error( err );
    } else {
        console.info( '==> Listening on. Open up http://%s:%s/ in your browser.', address, port );
    }
} );