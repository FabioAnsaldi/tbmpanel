'use strict';

import { initialState } from './reducer';
import TYPES from './types';

export const resetReport = () => {
    return Object.assign( {}, {
        type: TYPES.RESET_STATE
    }, initialState );
};

export const setDisplayTable = ( input ) => {
    return {
        type: TYPES.SET_DISPLAY_TABLE,
        visible: input
    };
};