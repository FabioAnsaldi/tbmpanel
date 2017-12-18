/**
 * Created by fabio.ansaldi on 10/11/2017.
 */

'use strict';

/**
 *  The main paths of your project handle these with care
 */
exports.paths = {
    configuration: 'config',
    source: 'src',
    build: 'build',
    assets: '/',
    bundle: 'bundle.js',
    acl: {
        filename: 'acl.json',
        defaultRole: 'guest',
        decodedObjectName: 'user'
    }
};

/**
 *  The On Authentication 2.0 properties to Sign In with JSON Web Tokens method
 */
exports.OAuth2 = {
    AuthorityServerUrl: 'http://leonardodev02:8041/oauth2/token',
    clientID: '49119a85f47846e29f3e6d357546e851',
    grantType: 'password'
};

/**
 *  The Google On Authentication 2.0 properties to Sign In with JSON Web Tokens method
 */
exports.googleOAuth2 = {
    clientID: '794512124618-7ivlr3ddrpsnmvfup2d7dom2u6v4pmmm.apps.googleusercontent.com',
    callbackURL: '/login/google/callback',
    passReqToCallback: true,
    scope: [
        'https://www.googleapis.com/auth/plus.login',
        'https://www.googleapis.com/auth/plus.profile.emails.read' ]
};

/**
 *  The main properties of your project environments
 */
exports.environment = {
    develop: {
        env: 'development',
        address: 'localhost',
        port: '3000'
    },
    production: {
        env: 'production',
        address: 'localhost.mydomain.com',
        port: '8080'
    },
    api: {
        port: 4000,
        address: 'localhost'
    }
};