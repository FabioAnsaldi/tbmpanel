'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from 'material-ui/Button';
import * as loginActions from './actions';

export class Login extends Component {
    render() {
        let onSingInClick = () => {
            this.props.dispatch( loginActions.userSingIn( { label: 'Sing Out', user: 'Fabio Ansaldi' } ) );
        };
        return (
            <div className="login">
                <h4>{this.props.loginReducer.title}</h4>
                <Button raised onClick={onSingInClick} component={Link} to={"/login"} color="accent">{this.props.loginReducer.label}</Button>
            </div>
        );
    }
}

function mapStateToProps( state ) {
    return {
        loginReducer: state.loginReducer
    };
}

export default connect( mapStateToProps )( Login );
