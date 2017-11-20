/**
 * Created by fabio.ansaldi on 10/11/2017.
 */

'use strict';
const initialState = {
    type: 'INITIAL_STATE',
    output: 'I\' saying ...'
};

const greetingReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case 'INITIAL_STATE':
            return Object.assign( {}, state, { 'output': initialState.output } );
        case 'SAY_HELLO':
            return Object.assign( {}, state, { 'output': action.output } );
        default:
            return state;
    }
};

export default greetingReducer;
