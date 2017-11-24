/**
 * Created by fabio.ansaldi on 10/11/2017.
 */

const express = require( 'express' )
    , path = require( 'path' )
    , app = express()
    , passport = require( 'passport' )
    , util = require( 'util' )
    , bodyParser = require( 'body-parser' )
    , cookieParser = require( 'cookie-parser' )
    , session = require( 'express-session' )
    //, RedisStore       = require( 'connect-redis' )( session )
    , GoogleStrategy = require( 'passport-google-oauth2' ).Strategy
    , config = require( '../config/tbmpanel.config.js' );

// API Access link for creating client ID and secret:
// https://code.google.com/apis/console/
const GOOGLE_CLIENT_ID = '794512124618-7ivlr3ddrpsnmvfup2d7dom2u6v4pmmm.apps.googleusercontent.com'
    , GOOGLE_CLIENT_SECRET = 'hEiAUQjIh7v-s83LI9SKa7EB';

/* Environment configuration constant */
const port = config.environment.production.port || 80
    , address = config.environment.production.address || 'localhost';
process.env.NODE_ENV = config.environment.production.env;

// Passport session setup.
//   To support persistent login sessions, Passport needs to be able to
//   serialize users into and deserialize users out of the session.  Typically,
//   this will be as simple as storing the user ID when serializing, and finding
//   the user by ID when deserializing.  However, since this example does not
//   have a database of user records, the complete Google profile is
//   serialized and deserialized.
passport.serializeUser( ( user, done ) => {
    done( null, user );
} );

passport.deserializeUser( ( obj, done ) => {
    done( null, obj );
} );

// Use the GoogleStrategy within Passport.
//   Strategies in Passport require a `verify` function, which accept
//   credentials (in this case, an accessToken, refreshToken, and Google
//   profile), and invoke a callback with a user object.
passport.use( new GoogleStrategy( {
        clientID: GOOGLE_CLIENT_ID,
        clientSecret: GOOGLE_CLIENT_SECRET,
        //NOTE :
        //Carefull ! and avoid usage of Private IP, otherwise you will get the device_id device_name issue for Private IP during authentication
        //The workaround is to set up thru the google cloud console a fully qualified domain name such as http://mydomain:3000/
        //then edit your /etc/hosts local file to point on your private IP.
        //Also both sign-in button + callbackURL has to be share the same url, otherwise two cookies will be created and lead to lost your session
        //if you use it.
        callbackURL: 'http://' + address + ':' + port + '/auth/google/callback',
        passReqToCallback: true
    }, ( request, accessToken, refreshToken, profile, done ) => {
        // asynchronous verification, for effect...
        process.nextTick( () => {
            // To keep the example simple, the user's Google profile is returned to
            // represent the logged-in user.  In a typical application, you would want
            // to associate the Google account with a user record in your database,
            // and return that user instead.
            console.log( JSON.stringify( accessToken ) );
            console.log( JSON.stringify( refreshToken ) );
            console.log( JSON.stringify( profile ) );
            return done( null, profile );
        } );
    }
) );

// configure Express
app.use( express.static( path.join( process.cwd(), config.paths.build ) ) );
app.use( cookieParser() );
app.use( bodyParser.json() );
app.use( bodyParser.urlencoded( {
    extended: true
} ) );
app.use( session( {
    secret: 'cookie_secret',
    name: 'kaas', /*
	store:  new RedisStore({
		host: '127.0.0.1',
		port: 6379
	}),*/
    proxy: true,
    resave: true,
    saveUninitialized: true
} ) );
app.use( passport.initialize() );
app.use( passport.session() );

app.get( '/', ( req, res, next ) => {
    res.sendFile( path.join( process.cwd(), config.paths.build + '/index.html' ) );
} );

// GET /auth/google
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  The first step in Google authentication will involve
//   redirecting the user to google.com.  After authorization, Google
//   will redirect the user back to this application at /auth/google/callback
app.get( '/login', passport.authenticate( 'google', {
    scope: [
        'https://www.googleapis.com/auth/plus.login',
        'https://www.googleapis.com/auth/plus.profile.emails.read' ]
} ) );

// GET /auth/google/callback
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  If authentication fails, the user will be redirected back to the
//   login page.  Otherwise, the primary route function function will be called,
//   which, in this example, will redirect the user to the home page.
app.get( '/login/callback',
    passport.authenticate( 'google', {
        successRedirect: '/',
        failureRedirect: '/'
    } ) );

app.get( '/logout', ( req, res ) => {
    req.logout();
    res.redirect( '/' );
} );

app.set( 'address', address );
app.listen( port, ( err ) => {
    if ( err ) {
        console.error( err );
    } else {
        console.info( '==> Listening on. Open up http://%s:%s/ in your browser.', address, port );
    }
} );

// Simple route middleware to ensure user is authenticated.
//   Use this route middleware on any resource that needs to be protected.  If
//   the request is authenticated (typically via a persistent login session),
//   the request will proceed.  Otherwise, the user will be redirected to the
//   login page.
let ensureAuthenticated = ( req, res, next ) => {
    if ( req.isAuthenticated() ) {
        return next();
    }
    res.redirect( '/login' );
};
