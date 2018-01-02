let actions_types = [ 'RESET_STATE', 'SET_MENU', 'SET_PAGES', 'ERROR_REQUEST' ];

const TYPES = {};
actions_types.map( ( string ) => {
    TYPES[ string ] = 'MAIN_' + string;
} );

export default TYPES;