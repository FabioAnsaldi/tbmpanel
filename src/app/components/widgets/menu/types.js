let actions_types = [ 'RESET_STATE', 'SET_LINKS', 'ERROR_REQUEST' ];

const TYPES = {};
actions_types.map( ( string ) => {
    TYPES[ string ] = 'MENU_' + string;
} );

export default TYPES;