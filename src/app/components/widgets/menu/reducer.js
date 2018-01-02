'use strict';

import TYPES from './types';

export const initialState = {
    title: 'Primary Menu',
    links: [],
    error: ''
};

const menuReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case TYPES.RESET_STATE:
            return Object.assign( {}, state, initialState );
        case TYPES.SET_LINKS:
            return Object.assign( {}, state, { 'links': action.links } );
        case TYPES.ERROR_REQUEST:
            return Object.assign( {}, state, { 'error': action.error } );
        default:
            return state;
    }
};

export default menuReducer;
