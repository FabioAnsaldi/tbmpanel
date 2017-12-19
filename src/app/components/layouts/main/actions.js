/**
 * Created by fabio.ansaldi on 10/11/2017.
 */
'use strict';

import { initialState } from './reducer';

export const resetMain = () => {
    return Object.assign( {}, { type: 'RESET_STATE' }, initialState );
};

export const setMenu = ( input ) => {
    return {
        type: 'SET_MENU',
        menu: input
    };
};

export const setPages = ( input ) => {
    return {
        type: 'SET_PAGES',
        pages: input
    };
};

export const errorRequest = ( input ) => {
    return {
        type: 'ERROR_REQUEST',
        error: input
    };
};
