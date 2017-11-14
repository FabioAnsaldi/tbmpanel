/**
 * Created by fabio.ansaldi on 10/11/2017.
 */

'use strict';
const initialState = [ {
    output: 'Use Redux'
} ];

const initialreducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case 'INITIALIZATION':
            return Object.assign( {}, state, { 'output': action.output } );
        default:
            return state;
    }
};

export default initialreducer;
