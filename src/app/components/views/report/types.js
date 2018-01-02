let actions_types = [ 'RESET_STATE', 'SET_DISPLAY_TABLE' ];

const TYPES = {};
actions_types.map( ( string ) => {
    TYPES[ string ] = 'REPORT_' + string;
} );

export default TYPES;