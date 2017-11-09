/**
 * Created by fabio.ansaldi on 09/05/2017.
 */

const path = require( 'path' );
const webpack = require( 'webpack' );
const webpackDevMiddleware = require( 'webpack-dev-middleware' );
const webpackHotMiddleware = require( 'webpack-hot-middleware' );
//const proxyMiddleware = require( 'http-proxy-middleware' );
//const exec = require( 'child_process' ).exec;
const config = require( '../config/tbmpanel.config.js' );
const webpackConfig = require( path.join( process.cwd(), config.paths.configuration + '/webpack.config' ) );
const express = require( 'express' );
const app = new (express)();

//let devConfig = config.devServer;
//let apiConfig = config.apiServer;
const port = 3000;
const compiler = webpack( webpackConfig );

app.use( webpackDevMiddleware( compiler, { noInfo: true, publicPath: webpackConfig.output.publicPath } ) );
app.use( webpackHotMiddleware( compiler ) );
/*
// Set up the proxy.
if ( devConfig.proxy ) {
    Object.keys( devConfig.proxy ).forEach( function ( context ) {
        app.use( proxyMiddleware( context, devConfig.proxy[ context ] ) );
    } );
}
*/
/*
// Set up the mock server.
if ( apiConfig ) {
    Object.keys( apiConfig ).forEach( function ( server, i ) {
        let child = exec( 'node ./servers/' + server, { env: { host: apiConfig[ server ].host, port: apiConfig[ server ].port } } );
        child.stderr.on( 'data', function ( data ) {
            console.log( server + ' stderr: ' + data );
        } );
        child.stdout.on( 'data', ( data ) => {
            console.log( server + ' stdout: ' + data.toString() );
        } );
        child.on( 'close', function ( code ) {
            console.log( server + ' closing code: ' + code );
        } );
    } );
}
*/
/*
app.use( '/images', express.static( path.resolve( __dirname, '../src/static/images' ) ) );
*/


app.get( '/', function ( req, res, next ) {
    res.sendFile( path.resolve( __dirname, '../src/index.html' ) );
} );

app.listen( port, function ( err ) {
    if ( err ) {
        console.error( err );
    } else {
        console.info( '==> Listening on. Open up http://localhost:%s/ in your browser.', port );
    }
} );