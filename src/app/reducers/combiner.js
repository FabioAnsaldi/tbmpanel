/**
 * Created by fabio.ansaldi on 10/11/2017.
 */

'use strict';
import { combineReducers } from 'redux';
import * as initialreducer from './index';
import * as reducers from '../../components/**/reducer.js';

let reduxsKeys = Object.keys( reducers );
let reduxs = {
    initialreducer: initialreducer.default
};
reduxsKeys.forEach( ( key ) => {
    reduxs[ key ] = reducers[ key ];
} );
const combinedReducers = combineReducers( reduxs );

export default combinedReducers;
