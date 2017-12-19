/**
 * Created by fabio.ansaldi on 10/11/2017.
 */

'use strict';
import React, { Component } from 'react';
import { Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import * as mainFunctions from './functions';
import Navmenu from '../../widgets/navmenu/index.js';

class Main extends Component {
    componentDidMount() {
        mainFunctions.apiRequest( this.props );
    }

    componentDidUpdate( prevProps ) {
        mainFunctions.menuChangeCheck( prevProps, this.props );
    }

    render() {
        return (
            <div>
                <Navmenu/>
                <Switch>{this.props.mainReducer.pages}</Switch>
            </div>
        );
    }
}

function mapStateToProps( state ) {
    return {
        mainReducer: state.mainReducer
    };
}

export default withRouter( connect( mapStateToProps )( Main ) );
