'use strict';

const initialState = {
    type: 'INITIAL_STATE',
    title: 'Login Form',
    label: 'Sing in with Google',
    user: {}
};

const loginReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case 'INITIAL_STATE':
            return Object.assign( {}, state, { 'title': initialState.title, 'label': initialState.label, 'user': initialState.user } );
        case 'USER_SINGIN':
            return Object.assign( {}, state, { 'label': action.label, 'user': action.user } );
        default:
            return state;
    }
};

export default loginReducer;
