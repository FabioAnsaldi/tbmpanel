import { combineReducers } from 'redux';

const initialState = {};

const rootReducer = combineReducers( {
    default: function ( state = initialState ) {
        return state;
    }
} );

export default rootReducer;
