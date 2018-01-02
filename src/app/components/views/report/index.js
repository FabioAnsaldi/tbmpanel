'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as reportFunctions from './functions';

export class Report extends Component {
    componentDidMount() {
        reportFunctions.showTable( this.props );
    }

    render() {
        return (
            <div className="report">
                <h2>{this.props.reportReducer.title}</h2>
                {this.props.reportReducer.visible ?
                    <table cellPadding="10" cellSpacing="0" width="100%">
                        <thead>
                        <tr>
                            <th>Report ID</th>
                            <th>Report Name</th>
                            <th>Report Value</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td align="center">123</td>
                            <td align="center">First Report</td>
                            <td align="center">Hello there!</td>
                        </tr>
                        <tr>
                            <td align="center">456</td>
                            <td align="center">Second Report</td>
                            <td align="center">Good bye!</td>
                        </tr>
                        </tbody>
                    </table> :
                    <p><b>Hey man! Log in to see this section</b></p>
                }
            </div>
        );
    }
}

function mapStateToProps( state ) {
    return {
        reportReducer: state.reportReducer
    };
}

export default connect( mapStateToProps )( Report );
