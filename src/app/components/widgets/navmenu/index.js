'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as navmenuFunctions from './functions';

export class Navmenu extends Component {
    componentDidUpdate( prevProps ) {
        navmenuFunctions.menuChangeCheck( prevProps, this.props );
    }

    render() {
        return (
            <div className="navmenu">
                <fieldset>
                    <legend>{this.props.navmenuReducer.title}</legend>
                    <ul>{this.props.navmenuReducer.links}</ul>
                </fieldset>
            </div>
        );
    }
}

function mapStateToProps( state ) {
    return {
        navmenuReducer: state.navmenuReducer,
        mainReducer: state.mainReducer
    };
}

export default connect( mapStateToProps )( Navmenu );
