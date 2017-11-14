/**
 * Created by fabio.ansaldi on 10/11/2017.
 */

'use strict';

export const say = ( output ) => {
    return {
        type: "SAY_HELLO",
        output: output
    };
};
