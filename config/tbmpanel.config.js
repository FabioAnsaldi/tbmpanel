/**
 * Created by fabio.ansaldi on 10/11/2017.
 */

'use strict';
const path = require( 'path' );

/**
 *  The main paths of your project handle these with care
 */
exports.paths = {
    configuration: 'config',
    source: 'src',
    build: 'build',
    assets: '/',
    bundle: 'bundle.js'
};

/**
 *  The On Authentication 2.0 properties to Sign In with JSON Web Tokens method
 */
exports.OAuth2 = {
    AuthorityServerUrl: 'http://leonardodev02:8041/oauth2/token',
    secretKey: 'm-cVXwv-qcuWqvrZYSV3F2gvVWzDmpEvL41VTxLO6vc',
    clientID: '49119a85f47846e29f3e6d357546e851',
    grantType: 'password'
};

/**
 *  The main properties of your project environments
 */
exports.environment = {
    develop: {
        env: 'development',
        address: '127.0.0.1',
        port: '3000'
    },
    production: {
        env: 'production',
        address: 'localhost.mydomain.com',
        port: '8080'
    }
};