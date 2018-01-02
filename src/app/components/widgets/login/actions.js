'use strict';

import { initialState } from './reducer';
import TYPES from './types';

export const resetLogin = () => {
    return Object.assign( {}, {
        type: TYPES.RESET_STATE
    }, initialState );
};

export const userNameChange = ( input ) => {
    return {
        type: TYPES.USER_NAME_CHANGE,
        username: input
    };
};

export const userPasswordChange = ( input ) => {
    return {
        type: TYPES.USER_PASSWORD_CHANGE,
        password: input
    };
};

export const userSingIn = ( input ) => {
    return {
        type: TYPES.USER_SINGIN,
        logged: JSON.stringify( input )
    };
};

export const errorSingIn = ( input ) => {
    return {
        type: TYPES.ERROR_SINGIN,
        error: input
    };
};
