/**
 * Created by fabio.ansaldi on 10/11/2017.
 */

'use strict';
const path = require( 'path' );
const config = require( '../config/tbmpanel.config.js' );
const express = require( 'express' );
const app = new (express)();
const passport = require( 'passport' );
const LocalStrategy = require( 'passport-local' ).Strategy;
const bodyParser = require( 'body-parser' );
const request = require( 'request' );
const jwt = require( 'jwt-simple' );

/* Environment configuration constant */
const port = config.environment.production.port || 9000;
const address = config.environment.production.address || 'localhost';
config.OAuth2.secretKey = 'm-cVXwv-qcuWqvrZYSV3F2gvVWzDmpEvL41VTxLO6vc';
process.env.NODE_ENV = config.environment.production.env;

app.use( express.static( path.join( process.cwd(), config.paths.build ) ) );
app.get( '/', ( req, res, next ) => {
    res.sendFile( path.join( process.cwd(), config.paths.build + '/index.html' ) );
} );

app.use( bodyParser.json() );
app.use( bodyParser.urlencoded( { extended: true } ) );
let params = {
    url: config.OAuth2.AuthorityServerUrl,
    form: { client_id: config.OAuth2.clientID, grant_type: config.OAuth2.grantType }
};
passport.use( new LocalStrategy( ( username, password, done ) => {
        params.form = Object.assign( {}, params.form, { username: username, password: password } );
        request.post( params, ( err, httpResponse, body ) => {
            if ( err ) {
                return done( err );
            }
            else {
                let bodyJSON = JSON.parse( body );
                let decoded;
                let bufSecret = Buffer.from( config.OAuth2.secretKey, 'base64' );
                // Support for nbf and exp claims.
                // According to the RFC, they should be in seconds.
                do {
                    try {
                        decoded = jwt.decode( bodyJSON.access_token, bufSecret );
                    } catch ( e ) {
                        if ( Date.now() > bodyJSON.nbf * 1000 + 1000 ) { // one second more
                            return done( new Error( 'Server timeOut error' ) );
                        }
                    }
                } while ( bodyJSON.nbf && Date.now() < bodyJSON.nbf * 1000 );
                return done( null, decoded );
            }
        } );
    }
) );
app.use( passport.initialize() );
app.post( '/login', passport.authenticate( 'local', { session: false } ), ( req, res ) => {
    res.send( req.user );
} );

app.set( 'address', address );
app.listen( port, ( err ) => {
    if ( err ) {
        console.error( err );
    } else {
        console.info( '==> Listening on. Open up http://%s:%s/ in your browser.', address, port );
    }
} );