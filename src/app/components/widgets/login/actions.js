'use strict';

export const reset = ( input ) => {
    return {
        type: 'RESET_STATE',
        title: input.title,
        googleStatus: input.googleStatus,
        labelsubmit: input.labelsubmit,
        labelusername: input.labelusername,
        username: input.username,
        labelpassword: input.labelpassword,
        password: input.password,
        logged: input.logged,
        error: input.error
    };
};

export const userNameChange = ( input ) => {
    return {
        type: 'USER_NAME_CHANGE',
        username: input
    };
};

export const userPasswordChange = ( input ) => {
    return {
        type: 'USER_PASSWORD_CHANGE',
        password: input
    };
};

export const userSingIn = ( input ) => {
    return {
        type: 'USER_SINGIN',
        logged: JSON.stringify( input )
    };
};

export const errorSingIn = ( input ) => {
    return {
        type: 'ERROR_SINGIN',
        error: input
    };
};
