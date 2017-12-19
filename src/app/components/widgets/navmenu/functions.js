'use strict';

import React from 'react';
import { Link } from 'react-router-dom';
import * as navmenuActions from './actions';

const config = require( '../../../../../config/tbmpanel.config.js' );

const doRequest = ( props ) => {
    return new Promise( ( fulfill, reject ) => {
        let init = {
            method: 'GET'
        };
        let address = 'http://' + config.environment.api.address + ':' + config.environment.api.port + '/api/navigation';
        fetch( address, init ).then( ( response ) => {
            return response.json();
        } ).then( ( json ) => {
            return fulfill( json );
        } ).catch( ( e ) => {
            return reject( e );
        } );
    } );
};

export const apiRequest = ( state ) => {
    doRequest( state.navmenuReducer ).then( ( json ) => {
        state.dispatch( navmenuActions.setMenu( json ) );
    } ).catch( ( e ) => {
        state.dispatch( navmenuActions.errorRequest( e ) );
    } );
};

export const makeRowsLinks = ( state ) => {
    let menu = state.navmenuReducer.menu;
    let rows = [];
    for ( let i in menu ) {
        if ( menu.hasOwnProperty( i ) ) {
            rows.push( <li key={i}><Link to={menu[ i ].href}> {menu[ i ].label} </Link></li> );
        }
    }
    state.dispatch( navmenuActions.setLinks( rows ) );
};

export const menuChangeCheck = ( prevProps, state ) => {
    if ( JSON.stringify( state.navmenuReducer.menu ) !== JSON.stringify( prevProps.navmenuReducer.menu ) ) {
        makeRowsLinks( state );
    }
};
