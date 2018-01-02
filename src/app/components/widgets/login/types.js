let actions_types = [ 'RESET_STATE', 'USER_NAME_CHANGE', 'USER_PASSWORD_CHANGE', 'USER_SINGIN', 'ERROR_SINGIN' ];

const TYPES = {};
actions_types.map( ( string ) => {
    TYPES[ string ] = 'LOGIN_' + string;
} );

export default TYPES;