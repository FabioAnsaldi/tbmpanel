'use strict';

const initialState = {
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
        case 'RESET_STATE':
            return Object.assign( {}, state, initialState );
        case 'USER_NAME_CHANGE':
            return Object.assign( {}, state, { 'username': action.username } );
        case 'USER_PASSWORD_CHANGE':
            return Object.assign( {}, state, { 'password': action.password } );
        case 'USER_SINGIN':
            return Object.assign( {}, state, { 'logged': action.logged } );
        case 'ERROR_SINGIN':
            return Object.assign( {}, state, { 'error': action.error } );
        default:
            return state;
    }
};

export default loginReducer;
