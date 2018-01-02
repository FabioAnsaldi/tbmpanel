'use strict';

import { initialState } from './reducer';
import TYPES from './types';

export const resetHome = () => {
    return Object.assign( {}, {
        type: TYPES.RESET_STATE
    }, initialState );
};
