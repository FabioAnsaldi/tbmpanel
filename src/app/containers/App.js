import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class App extends Component {
    render() {
        return (
            <div>Ciao</div>
        );
    }
}

function mapStateToProps( state ) {
    return {
        default: state.default
    };
}

export default connect( mapStateToProps )( App );
