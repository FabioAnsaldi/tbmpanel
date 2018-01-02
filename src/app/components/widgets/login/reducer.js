'use strict';

import TYPES from './types';

export const initialState = {
    title: 'Sign In Form',
    googleStatus: 'Sing in with Google',
    labelsubmit: 'Sign in',
    labelusername: 'Username',
    username: '',
    labelpassword: 'Password',
    password: '',
    logged: false,
    error: ''
};

const loginReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case TYPES.RESET_STATE:
            return Object.assign( {}, state, initialState );
        case TYPES.USER_NAME_CHANGE:
            return Object.assign( {}, state, { 'username': action.username } );
        case TYPES.USER_PASSWORD_CHANGE:
            return Object.assign( {}, state, { 'password': action.password } );
        case TYPES.USER_SINGIN:
            return Object.assign( {}, state, { 'logged': action.logged } );
        case TYPES.ERROR_SINGIN:
            return Object.assign( {}, state, { 'error': action.error } );
        default:
            return state;
    }
};

export default loginReducer;
