/**
 * Created by fabio.ansaldi on 10/11/2017.
 */

'use strict';
const path = require( 'path' );
const config = require( '../config/tbmpanel.config.js' );
const express = require( 'express' );
const app = new (express)();

/* Environment configuration constant */
const port = config.environment.production.port || 9000;
const address = config.environment.production.address || 'localhost';
process.env.NODE_ENV = config.environment.production.env;

app.use( express.static( path.join( process.cwd(), config.paths.build ) ) );
app.get( '/', ( req, res, next ) => {
    res.sendFile( path.join( process.cwd(), config.paths.build + '/index.html' ) );
} );

app.set( 'address', address );
app.listen( port, ( err ) => {
    if ( err ) {
        console.error( err );
    } else {
        console.info( '==> Listening on. Open up http://%s:%s/ in your browser.', address, port );
    }
} );