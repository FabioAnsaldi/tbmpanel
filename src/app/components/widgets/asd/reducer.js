'use strict';

export const initialState = {
    output: 'Use React with Redux'
};

const asdReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case 'RESET_STATE':
            return Object.assign( {}, state, initialState );
        default:
            return state;
    }
};

export default asdReducer;