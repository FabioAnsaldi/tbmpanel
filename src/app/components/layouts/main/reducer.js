/**
 * Created by fabio.ansaldi on 10/11/2017.
 */

'use strict';
export const initialState = {
    title: 'Use Redux',
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
        case 'RESET_STATE':
            return Object.assign( {}, state, initialState );
        case 'SET_MENU':
            return Object.assign( {}, state, { 'menu': action.menu } );
        case 'SET_PAGES':
            return Object.assign( {}, state, { 'pages': action.pages } );
        case 'ERROR_REQUEST':
            return Object.assign( {}, state, { 'error': action.error } );
        default:
            return state;
    }
};

export default mainReducer;
