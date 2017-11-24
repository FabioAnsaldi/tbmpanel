/**
 * Created by fabio.ansaldi on 10/11/2017.
 */

'use strict';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './app/combiner/store';
import Main from './app/components/layouts/main/index';

render(
    <Provider store={store}>
        <BrowserRouter>
            <Main/>
        </BrowserRouter>
    </Provider>,
    document.getElementById( 'root' )
);
