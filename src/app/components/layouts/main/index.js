'use strict';

import React, { Component } from 'react';
import { Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import * as mainFunctions from './functions';
import Menu from '../../widgets/menu/index.js';

export class Main extends Component {
    componentDidMount() {
        mainFunctions.apiRequest( this.props );
    }

    componentDidUpdate( prevProps ) {
        mainFunctions.menuChangeCheck( prevProps, this.props );
    }

    render() {
        return (
            <div>
                <header>
                    <img className="logo" src="https://www.google.com/a/triboo.it/images/logo.gif" style={{ maxWidth: "144px", maxHeight: "60px" }}/>
                    <Menu/>
                </header>
                <main>
                    <Switch>{this.props.mainReducer.pages}</Switch>
                </main>
                <footer>
                    <p style={{ textAlign: "center" }}>
                        <b>Powered by React & Redux</b>
                    </p>
                </footer>
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
