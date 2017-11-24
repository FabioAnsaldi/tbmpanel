'use strict';

export const init = ( input ) => {
    return {
        type: 'INITIAL_STATE',
        title: input.title,
        label: input.label,
        user: input.user
    };
};

export const userSingIn = ( input ) => {
    return {
        type: 'USER_SINGIN',
        label: input.label,
        user: input.user
    };
};
