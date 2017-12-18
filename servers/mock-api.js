/**
 * Created by fabio.ansaldi on 10/11/2017.
 */

'use strict';
const config = require( '../config/tbmpanel.config.js' );
const express = require( 'express' );
const app = new (express)();

/* Environment configuration constant */
const port = config.environment.api.port || 4000;
const address = config.environment.api.address || 'localhost';
process.env.NODE_ENV = config.environment.develop.env;

const navigation = {
    home: {
        label: 'Home',
        href: '/'
    },
    report: {
        label: 'Report',
        href: '/report'
    }
};

app.use( ( req, res, next ) => {
    res.header( "Access-Control-Allow-Origin", "*" );
    res.header( "Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept" );
    next();
} );

app.get( '/api/navigation', ( req, res ) => {
    res.json( navigation );
} );

app.set( 'address', address );
app.listen( port, ( err ) => {
    if ( err ) {
        console.log( err );
    } else {
        console.info( '==> API server is listening on http://%s:%s/ in your browser.', address, port );
    }
} );