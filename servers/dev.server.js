/**
 * Created by fabio.ansaldi on 10/11/2017.
 */

'use strict';
const path = require( 'path' );
const webpack = require( 'webpack' );
const webpackDevMiddleware = require( 'webpack-dev-middleware' );
const webpackHotMiddleware = require( 'webpack-hot-middleware' );
const config = require( '../config/tbmpanel.config.js' );
const webpackConfig = require( path.join( process.cwd(), config.paths.configuration + '/webpack.dev' ) );
const history = require( 'connect-history-api-fallback' );
const express = require( 'express' );
const app = new (express)();
const passport = require( 'passport' );
const LocalStrategy = require( 'passport-local' ).Strategy;
const bodyParser = require( 'body-parser' );
const request = require( 'request' );
const jwt = require( 'jwt-simple' );

/* Environment configuration constant */
const port = config.environment.develop.port || 9000;
const address = config.environment.develop.address || 'localhost';
process.env.NODE_ENV = config.environment.develop.env;
const compiler = webpack( webpackConfig );

app.use( history() );
app.use( webpackDevMiddleware( compiler, { noInfo: true, publicPath: webpackConfig.output.publicPath } ) );
app.use( webpackHotMiddleware( compiler ) );

app.get( '/', function ( req, res, next ) {
    res.sendFile( path.join( process.cwd(), config.paths.source + '/index.html' ) );
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