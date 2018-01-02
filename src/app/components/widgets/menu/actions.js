'use strict';

import { initialState } from './reducer';
import TYPES from './types';

export const resetMenu = () => {
    return Object.assign( {}, {
        type: TYPES.RESET_STATE
    }, initialState );
};

export const setLinks = ( input ) => {
    return {
        type: TYPES.SET_LINKS,
        links: input
    };
};

export const errorRequest = ( input ) => {
    return {
        type: TYPES.ERROR_REQUEST,
        error: input
    };
};
