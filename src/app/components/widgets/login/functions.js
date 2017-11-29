'use strict';

import * as loginActions from './actions';

const doLogin = ( props ) => {
    return new Promise( ( fulfill, reject ) => {
        setTimeout( () => {
            if ( props.username && props.password ) {
                return fulfill( true );
            } else {
                return reject( false );
            }
        }, 2000 );
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
