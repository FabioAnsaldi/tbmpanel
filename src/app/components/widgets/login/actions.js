'use strict';

export const init = ( input ) => {
    return {
        type: 'INITIAL_STATE',
        title: input
    };
};

export const usernameChange = ( input ) => {
    return {
        type: 'USERNAME_CHANGE',
        username: input
    };
};

export const passwordChange = ( input ) => {
    return {
        type: 'PASSWORD_CHANGE',
        password: input
    };
};
