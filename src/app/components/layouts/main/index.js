/**
 * Created by fabio.ansaldi on 10/11/2017.
 */

'use strict';
import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Home from '../../views/home/index.js';
import Report from '../../views/report/index.js';

class Main extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li><Link to={"/"}>Home</Link></li>
                    <li><Link to={"/report"}>Report</Link></li>
                    <li><Link to={"/report/1234"}>Report 1234</Link></li>
                </ul>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/report" component={Report}/>
                    <Route path="/report/:number" component={Report}/>
                </Switch>
            </div>
        );
    }
}

function mapStateToProps( state ) {
    return {
        initial: state.initial
    };
}

export default withRouter( connect( mapStateToProps )( Main ) );
