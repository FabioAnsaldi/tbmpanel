let actions_types = [ 'RESET_STATE' ];

const TYPES = {};
actions_types.map( ( string ) => {
    TYPES[ string ] = 'HOME_' + string;
} );

export default TYPES;