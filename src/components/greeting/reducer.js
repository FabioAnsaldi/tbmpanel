/**
 * Created by fabio.ansaldi on 10/11/2017.
 */

'use strict';
const initialState = [ {
    output: 'What?'
} ];

const greetingReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case 'SAY_HELLO':
            return Object.assign( {}, state, { 'output': action.output } );
        default:
            return state;
    }
};

export default greetingReducer;
