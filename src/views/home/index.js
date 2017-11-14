/**
 * Created by fabio.ansaldi on 10/11/2017.
 */

'use strict';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Greeting from '../../components/greeting/index.js';
import Foobaring from '../../components/foobaring/index.js';

class Home extends Component {
    render() {
        return (
            <div>
                <h2>Home page</h2>
                <table  cellPadding="10" cellSpacing="0" width="100%">
                    <thead>
                        <tr>
                            <th>Greeting Component</th>
                            <th>Foobaring Component</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td align="center"><Greeting/></td>
                            <td align="center"><Foobaring/></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

function mapStateToProps( state ) {
    return {
        initial: state.initial
    };
}

export default connect( mapStateToProps )( Home );
