'use strict';

import React from 'react';
import { Route } from 'react-router-dom';
import * as mainActions from './actions';
import * as views from '../../views/**/index.js';

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
    doRequest( state.mainReducer ).then( ( json ) => {
        state.dispatch( mainActions.setMenu( json ) );
    } ).catch( ( e ) => {
        state.dispatch( mainActions.errorRequest( e ) );
    } );
};

export const makePagesRows = ( state ) => {
    let menu = state.mainReducer.menu;
    let rows = [];
    for ( let i in menu ) {
        if ( menu.hasOwnProperty( i ) ) {
            if ( i in views ) {
                rows.push( <Route key={i} exact path={menu[ i ].href} component={views[ i ]} /> );
            }
        }
    }
    state.dispatch( mainActions.setPages( rows ) );
};

export const menuChangeCheck = ( prevProps, state ) => {
    if ( JSON.stringify( state.mainReducer.menu ) !== JSON.stringify( prevProps.mainReducer.menu ) ) {
        makePagesRows( state );
    }
};
