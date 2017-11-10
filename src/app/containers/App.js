/**
 * Created by fabio.ansaldi on 10/11/2017.
 */

'use strict';
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class App extends Component {
    render() {
        return (
            <div>Ciao Mondo!</div>
        );
    }
}

function mapStateToProps( state ) {
    return {
        default: state.default
    };
}

export default connect( mapStateToProps )( App );
