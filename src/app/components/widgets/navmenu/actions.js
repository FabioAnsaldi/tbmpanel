'use strict';

import { initialState } from './reducer';

export const resetMenu = () => {
    return Object.assign( {}, { type: 'RESET_STATE' }, initialState );
};

export const setMenu = ( input ) => {
    return {
        type: 'SET_MENU',
        menu: input
    };
};

export const setLinks = ( input ) => {
    return {
        type: 'SET_LINKS',
        links: input
    };
};

export const errorRequest = ( input ) => {
    return {
        type: 'ERROR_REQUEST',
        error: input
    };
};

