'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as greetingFunctions from './functions';

export class Greeting extends Component {
    componentDidUpdate( prevProps ) {
        greetingFunctions.greetsChangeCheck( prevProps, this.props );
    }

    render() {
        let letsGreeting = () => {
            greetingFunctions.greeting( this.props );
        };
        return (
            <div className="greeting">
                <h4>{this.props.greetingReducer.title}</h4>
                <button className="btn" onClick={letsGreeting}>Click me!</button>
                <br/>
                <strong>{this.props.greetingReducer.output}</strong>
            </div>
        );
    }
}

function mapStateToProps( state ) {
    return {
        greetingReducer: state.greetingReducer
    };
}

export default connect( mapStateToProps )( Greeting );
