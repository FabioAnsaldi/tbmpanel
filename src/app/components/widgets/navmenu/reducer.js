'use strict';

export const initialState = {
    title: 'Menu',
    links: [],
    error: ''
};

const navmenuReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case 'RESET_STATE':
            return Object.assign( {}, state, initialState );
        case 'SET_LINKS':
            return Object.assign( {}, state, { 'links': action.links } );
        case 'ERROR_REQUEST':
            return Object.assign( {}, state, { 'error': action.error } );
        default:
            return state;
    }
};

export default navmenuReducer;
