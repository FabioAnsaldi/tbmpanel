'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Greeting from '../../widgets/greeting/index.js';
import Login from '../../widgets/login/index.js';

class Home extends Component {
    render() {
        return (
            <div className="home">
                <h2>{this.props.homeReducer.title}</h2>
                <table cellPadding="10" cellSpacing="0" width="100%">
                    <thead>
                    <tr>
                        <th>Greeting Component</th>
                        <th>Foobaring Component</th>
                        <th>Login Component</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td align="center"><Greeting/></td>
                        <td align="center">Foobaring</td>
                        <td align="center"><Login/></td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

function mapStateToProps( state ) {
    return {
        homeReducer: state.homeReducer
    };
}

export default withRouter( connect( mapStateToProps )( Home ) );
