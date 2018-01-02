'use strict';

import * as reportActions from './actions';

export const showTable = ( state ) => {
    state.dispatch( reportActions.setDisplayTable( true ) );
};
