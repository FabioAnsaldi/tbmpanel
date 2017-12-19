'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as navmenuFunctions from './functions';

export class Navmenu extends Component {
    componentDidMount() {
        navmenuFunctions.apiRequest( this.props );
    }

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
        navmenuReducer: state.navmenuReducer
    };
}

export default connect( mapStateToProps )( Navmenu );
