/**
 * Created by fabio.ansaldi on 10/11/2017.
 */

'use strict';
import { createStore } from 'redux';
import combinedReducers from '../reducers/combiner';

const store = createStore( combinedReducers );

if ( module.hot ) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept( '../reducers', () => {
        const nextReducer = combinedReducers;
        store.replaceReducer( nextReducer );
    } );
}

export default store;