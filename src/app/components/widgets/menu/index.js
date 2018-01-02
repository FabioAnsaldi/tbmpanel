'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as menuFunctions from './functions';

export class Menu extends Component {
    componentDidMount() {
        menuFunctions.makeRowsLinks( this.props );
    }

    componentDidUpdate( prevProps ) {
        menuFunctions.menuChangeCheck( prevProps, this.props );
    }

    render() {
        return (
            <div className="menu">
                <fieldset>
                    <legend>{this.props.menuReducer.title}</legend>
                    <ul>{this.props.menuReducer.links}</ul>
                </fieldset>
            </div>
        );
    }
}

function mapStateToProps( state ) {
    return {
        menuReducer: state.menuReducer,
        menu: state.mainReducer.menu
    };
}

export default connect( mapStateToProps )( Menu );
