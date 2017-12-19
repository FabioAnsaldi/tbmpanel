'use strict';

export const initialState = {
    title: 'Menu',
    menu: {
        home: {
            label: 'Home',
            href: '/'
        }
    },
    links: [],
    error: ''
};

const navmenuReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case 'RESET_STATE':
            return Object.assign( {}, state, initialState );
        case 'SET_MENU':
            return Object.assign( {}, state, { 'menu': action.menu } );
        case 'SET_LINKS':
            return Object.assign( {}, state, { 'links': action.links } );
        case 'ERROR_REQUEST':
            return Object.assign( {}, state, { 'error': action.error } );
        default:
            return state;
    }
};

export default navmenuReducer;
