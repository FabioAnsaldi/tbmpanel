'use strict';

import TYPES from './types';

export const initialState = {
    title: 'Use React with Redux',
    output: ':-('
};

const greetingReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case TYPES.RESET_STATE:
            return Object.assign( {}, state, initialState );
        case TYPES.SAY_GREETS:
            return Object.assign( {}, state, { 'output': action.output } );
        default:
            return state;
    }
};

export default greetingReducer;
