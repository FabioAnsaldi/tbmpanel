/**
 * Created by fabio.ansaldi on 10/11/2017.
 */

'use strict';
const initialState = [ {
    output: 'Foo!'
} ];

const foobaringReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case 'FOOBAR':
            return Object.assign( {}, state, { 'output': action.output } );
        default:
            return state;
    }
};

export default foobaringReducer;
