'use strict';

import React from 'react';
import { Link } from 'react-router-dom';
import * as navmenuActions from './actions';

const config = require( '../../../../../config/tbmpanel.config.js' );

export const makeRowsLinks = ( state ) => {
    let menu = state.mainReducer.menu;
    let rows = [];
    for ( let i in menu ) {
        if ( menu.hasOwnProperty( i ) ) {
            rows.push( <li key={i}><Link to={menu[ i ].href}> {menu[ i ].label} </Link></li> );
        }
    }
    state.dispatch( navmenuActions.setLinks( rows ) );
};

export const menuChangeCheck = ( prevProps, state ) => {
    if ( JSON.stringify( state.mainReducer.menu ) !== JSON.stringify( prevProps.mainReducer.menu ) ) {
        makeRowsLinks( state );
    }
};
