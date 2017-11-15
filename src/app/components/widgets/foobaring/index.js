/**
 * Created by fabio.ansaldi on 10/11/2017.
 */

'use strict';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bar } from './actions';

export class Foobaring extends Component {

    render() {
        let letsGreeting = () => {
            this.props.dispatch( bar( 'Bar!' ) );
        };
        return (
            <div className="foobaring">
                <button className="btn" onClick={letsGreeting}>Click me!</button><br/>
                <strong>{this.props.foobaringReducer.output}</strong>
            </div>
        );
    }
}

function mapStateToProps( state ) {
    return {
        foobaringReducer: state.foobaringReducer
    };
}

export default connect( mapStateToProps )( Foobaring );
