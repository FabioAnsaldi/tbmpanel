/**
 * Created by fabio.ansaldi on 10/11/2017.
 */

'use strict';
import { combineReducers } from 'redux';
import * as mainReducer from '../components/layouts/main/reducer';
import * as reducers from '../components/**/reducer.js';

let reduxs = {
    mainReducer: mainReducer.default
};
Object.keys( reducers ).forEach( ( key ) => {
    reduxs[ reducers[ key ].name ] = reducers[ key ];
} );
const combination = combineReducers( reduxs );

export default combination;
