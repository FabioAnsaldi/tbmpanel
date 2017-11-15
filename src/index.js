/**
 * Created by fabio.ansaldi on 10/11/2017.
 */

'use strict';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Main from './app/components/layouts/main/index';
import store from './app/combiner/store';

render(
    <Provider store={store}>
        <BrowserRouter>
            <Main/>
        </BrowserRouter>
    </Provider>,
    document.getElementById( 'root' )
);
