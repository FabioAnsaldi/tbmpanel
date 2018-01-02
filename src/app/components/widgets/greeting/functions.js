'use strict';

import * as greetingActions from './actions';
import * as greetingReducers from './reducer';

export const greeting = ( state ) => {
    state.dispatch( greetingActions.greets( 'Hello!' ) );
};

export const greetsChangeCheck = ( prevProps, state ) => {
    if ( state.greetingReducer.output !== greetingReducers.initialState.output ) {
        setTimeout( () => {
            state.dispatch( greetingActions.resetGreeting() );
        }, 500 );
    }
};