'use strict';

import TYPES from './types';

export const initialState = {
    title: 'Report page',
    visible: false
};

const reportReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case TYPES.RESET_STATE:
            return Object.assign( {}, state, initialState );
        case TYPES.SET_DISPLAY_TABLE:
            return Object.assign( {}, state, { 'visible': action.visible } );
        default:
            return state;
    }
};

export default reportReducer;
