let actions_types = [ 'RESET_STATE', 'SAY_GREETS' ];

const TYPES = {};
actions_types.map( ( string ) => {
    TYPES[ string ] = 'GREETING_' + string;
} );

export default TYPES;