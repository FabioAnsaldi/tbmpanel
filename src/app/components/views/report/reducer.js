/**
 * Created by fabio.ansaldi on 10/11/2017.
 */

'use strict';
const initialState = {
    type: 'INITIAL_STATE',
    output: 'Report page'
};

const reportReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case 'INITIAL_STATE':
            return Object.assign( {}, state, { 'output': initialState.output } );
        default:
            return state;
    }
};

export default reportReducer;
