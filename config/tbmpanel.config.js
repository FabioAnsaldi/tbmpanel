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

exports.environment = {
    develop: {
        env: 'development',
        address: '127.0.0.1',
        port: '3000'
    },
    production: {
        env: 'production',
        address: '192.168.0.104',
        port: '8080'
    }
};