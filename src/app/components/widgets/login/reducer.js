'use strict';

const initialState = {
    type: 'INITIAL_STATE',
    title: 'Login Form',
    username: '',
    password: ''
};

const loginReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case 'INITIAL_STATE':
            return Object.assign( {}, state, { 'title': initialState.title } );
        case 'USERNAME_CHANGE':
            return Object.assign( {}, state, { 'username': action.username } );
        case 'PASSWORD_CHANGE':
            return Object.assign( {}, state, { 'password': action.password } );
        default:
            return state;
    }
};

export default loginReducer;
