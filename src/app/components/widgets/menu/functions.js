'use strict';

import React from 'react';
import { Link } from 'react-router-dom';
import * as menuActions from './actions';

export const makeRowsLinks = ( state ) => {
    let menu = state.menu;
    let rows = [];
    for ( let i in menu ) {
        if ( menu.hasOwnProperty( i ) ) {
            rows.push( <li key={i}><Link to={menu[ i ].href}> {menu[ i ].label} </Link></li> );
        }
    }
    state.dispatch( menuActions.setLinks( rows ) );
};


export const menuChangeCheck = ( prevProps, state ) => {
    if ( JSON.stringify( state.menu ) !== JSON.stringify( prevProps.menu ) ) {
        makeRowsLinks( state );
    }
};