/**
 * Created by fabio.ansaldi on 10/11/2017.
 */

'use strict';
import { createStore } from 'redux';
import combination from './index';

const store = createStore( combination );

if ( module.hot ) {
    // Enable Webpack hot module replacement for combiner
    module.hot.accept( '../combiner', () => {
        const nextReducer = combination;
        store.replaceReducer( nextReducer );
    } );
}

export default store;