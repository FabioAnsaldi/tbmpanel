/**
 * Created by fabio.ansaldi on 10/11/2017.
 */

'use strict';
import { combineReducers } from 'redux';
import * as initialreducer from './index';
import * as reducers from '../../components/**/reducer.js';

let reduxs = {
    /*initialreducer: initialreducer.default*/
};
Object.keys( reducers ).forEach(  ( key ) => {
    reduxs[ reducers[ key ].name ] = reducers[ key ];
} );
const combinedReducers = combineReducers( reduxs );

export default combinedReducers;
