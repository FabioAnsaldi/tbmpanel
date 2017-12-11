'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as asdActions from './actions';
import * as asdFunctions from './functions';

export class Asd extends Component {
    render() {
        let onSomething = () => {
            asdFunctions.something( this.props );
        };
        let onOnotherThing = () => {
            this.props.dispatch( asdActions.someAction( result ) );
        };
        return (
            <div className="asd">
                <h4>{this.props.asdReducer.output}</h4>
            </div>
        );
    }
}

function mapStateToProps( state ) {
    return {
        asdReducer: state.asdReducer
    };
}

export default connect( mapStateToProps )( Asd );
