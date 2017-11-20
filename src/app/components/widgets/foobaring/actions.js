/**
 * Created by fabio.ansaldi on 10/11/2017.
 */

'use strict';

export const init = ( output ) => {
    return {
        type: 'INITIAL_STATE',
        output: output
    };
};

export const bar = ( output ) => {
    return {
        type: 'FOOBAR',
        output: output
    };
};
