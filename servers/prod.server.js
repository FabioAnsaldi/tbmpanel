/**
 * Created by fabio.ansaldi on 10/11/2017.
 */

'use strict';
const path = require( 'path' );
const config = require( '../config/tbmpanel.config.js' );
const express = require( 'express' );
const session = require( 'express-session' );
const cookieParser = require( 'cookie-parser' );
const app = new (express)();
const passport = require( 'passport' );
const LocalStrategy = require( 'passport-local' ).Strategy;
const GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;
const bodyParser = require( 'body-parser' );
const request = require( 'request' );
const jwt = require( 'jwt-simple' );
const acl = require( 'express-acl' );

/* Environment configuration constant */
const port = config.environment.production.port || 9000;
const address = config.environment.production.address || 'localhost';
config.OAuth2.secretKey = 'm-cVXwv-qcuWqvrZYSV3F2gvVWzDmpEvL41VTxLO6vc';
process.env.NODE_ENV = config.environment.production.env;

acl.config( {
    filename: config.paths.acl.filename,
    path: config.paths.configuration,
    defaultRole: config.paths.acl.defaultRole,
    decodedObjectName: config.paths.acl.decodedObjectName
} );
app.use( acl.authorize.unless( { path: [ '/login', '/login/google' ] } ) );

app.use( cookieParser() );
app.use( bodyParser.json() );
app.use( bodyParser.urlencoded( { extended: true } ) );
passport.serializeUser( ( user, done ) => {
    done( null, user );
} );
passport.deserializeUser( ( obj, done ) => {
    done( null, obj );
} );
app.use( session( {
    secret: 'keyboard crazy cat',
    name: 'tbmpanel',
    proxy: true,
    resave: true,
    saveUninitialized: true
} ) );
app.use( passport.initialize() );
app.use( passport.session() );
passport.use( new LocalStrategy( ( username, password, done ) => {
        let params = {
            url: config.OAuth2.AuthorityServerUrl,
            form: { client_id: config.OAuth2.clientID, grant_type: config.OAuth2.grantType }
        };
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
                    if ( Date.now() > bodyJSON.nbf * 1000 + 1000 ) { // one second more
                        throw new Error( 'Server timeOut error' );
                    }
                    try {
                        decoded = jwt.decode( bodyJSON.access_token, bufSecret );
                    } catch ( err ) {
                        return done( err );
                    }
                } while ( bodyJSON.nbf && Date.now() < bodyJSON.nbf * 1000 );
                return done( null, decoded );
            }
        } );
    }
) );
passport.use( new GoogleStrategy( {
        clientID: config.googleOAuth2.clientID,
        clientSecret: 'hEiAUQjIh7v-s83LI9SKa7EB',
        callbackURL: config.googleOAuth2.callbackURL,
        passReqToCallback: config.googleOAuth2.passReqToCallback
    },
    ( request, accessToken, refreshToken, profile, done ) => {
        process.nextTick( () => {
            return done( null, profile );
        } );
    }
) );

app.post( '/login', passport.authenticate( 'local', { session: false } ), ( req, res ) => {
    res.send( req.user );
} );
app.get( '/login/google', passport.authenticate( 'google', { scope: config.googleOAuth2.scope } ) );
app.get( '/login/google/callback', passport.authenticate( 'google', { successRedirect: '/', failureRedirect: '/' } ) );

app.get( '/', ( req, res ) => {
    res.sendFile( path.join( process.cwd(), config.paths.build + '/index.html' ) );
} );
app.use( express.static( path.join( process.cwd(), config.paths.build ) ) );

app.set( 'address', address );
app.listen( port, ( err ) => {
    if ( err ) {
        console.error( err );
    } else {
        console.info( '==> Listening on. Open up http://%s:%s/ in your browser.', address, port );
    }
} );