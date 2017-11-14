/**
 * Created by fabio.ansaldi on 10/11/2017.
 */

'use strict';
import React, { Component } from 'react';
import Home from '../../views/home/index.js';
import { Route, Switch } from 'react-router-dom';

class Main extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path="/" component={Home}/>
                </Switch>
            </div>
        );
    }
}

export default Main;
