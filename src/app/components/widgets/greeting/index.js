/**
 * Created by fabio.ansaldi on 10/11/2017.
 */

'use strict';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { say } from './actions';

export class Greeting extends Component {

    render() {
        let letsGreeting = () => {
            this.props.dispatch( say( 'Hello!' ) );
        };
        return (
            <div className="greeting">
                <button className="btn" onClick={letsGreeting}>Click me!</button><br/>
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
