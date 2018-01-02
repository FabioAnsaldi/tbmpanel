'use strict';

import TYPES from './types';

export const initialState = {
    type: TYPES.INITIAL_STATE,
    title: 'Home page'
};

const homeReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case TYPES.RESET_STATE:
            return Object.assign( {}, state, initialState );
        default:
            return state;
    }
};

export default homeReducer;
