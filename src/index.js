/**
 * Created by fabio.ansaldi on 10/11/2017.
 */

'use strict';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import main from './app/containers/main';
import store from './app/store/configureStore';
import { Route, BrowserRouter } from 'react-router-dom';

render(
    <Provider store={store}>
        <BrowserRouter>
            <Route path="/" component={main}/>
        </BrowserRouter>
    </Provider>,
    document.getElementById( 'root' )
);
