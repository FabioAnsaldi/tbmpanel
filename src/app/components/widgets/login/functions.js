'use strict';

import * as loginActions from './actions';

const config = require( '../../../../../config/tbmpanel.config.js' );

const doQueryString = ( data ) => {
    let a = [];
    for ( let p in data ) {
        if ( data.hasOwnProperty( p ) ) {
            a.push( encodeURIComponent( p ) + "=" + encodeURIComponent( data[ p ] ) );
        }
    }
    return a.join( "&" );
};

const doLogin = ( props ) => {
    return new Promise( ( fulfill, reject ) => {
        setTimeout( () => {
            if ( props.username && props.password ) {
                let headers = new Headers();
                headers.append( 'Content-Type', 'application/x-www-form-urlencoded' );
                let init = {
                    method: 'POST',
                    headers: headers,
                    body: doQueryString( {
                        username: props.username,
                        password: props.password,
                        client_id: config.OAuth2.clientID,
                        grant_type: config.OAuth2.grantType
                    } ),
                };
                fetch( '/login', init ).then( ( response ) => {
                    return response.json();
                } ).then( ( json ) => {
                    return fulfill( json );
                } ).catch( ( e ) => {
                    return reject( false );
                } );
            } else {
                return reject( false );
            }
        }, 1000 );
    } );
};

export const login = ( state ) => {
    state.dispatch( loginActions.errorSingIn( '' ) );
    doLogin( state.loginReducer ).then( ( e ) => {
        state.dispatch( loginActions.userSingIn( e ) );
    } ).catch( ( e ) => {
        state.dispatch( loginActions.errorSingIn( 'Log in Error' ) );
    } );
};
