'use strict';

import { initialState } from './reducer';
import TYPES from './types';

export const resetGreeting = () => {
    return Object.assign( {}, {
        type: TYPES.RESET_STATE
    }, initialState );
};

export const greets = ( output ) => {
    return {
        type: TYPES.SAY_GREETS,
        output: output
    };
};
