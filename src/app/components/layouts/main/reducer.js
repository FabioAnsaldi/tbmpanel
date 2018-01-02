'use strict';

import TYPES from './types';

export const initialState = {
    title: 'Use React with Redux',
    menu: {
        home: {
            label: 'Home',
            href: '/'
        }
    },
    pages: [],
    error: ''
};

const mainReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case TYPES.RESET_STATE:
            return Object.assign( {}, state, initialState );
        case TYPES.SET_MENU:
            return Object.assign( {}, state, { 'menu': action.menu } );
        case TYPES.SET_PAGES:
            return Object.assign( {}, state, { 'pages': action.pages } );
        case TYPES.ERROR_REQUEST:
            return Object.assign( {}, state, { 'error': action.error } );
        default:
            return state;
    }
};

export default mainReducer;
