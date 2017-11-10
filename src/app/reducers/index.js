/**
 * Created by fabio.ansaldi on 10/11/2017.
 */

'use strict';
import { combineReducers } from 'redux';

const initialState = {};

const rootReducer = combineReducers( {
    default: function ( state = initialState ) {
        return state;
    }
} );

export default rootReducer;
