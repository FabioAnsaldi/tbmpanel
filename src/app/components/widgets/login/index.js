'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import * as loginActions from './actions';

export class Login extends Component {
    render() {
        let onUsernameChange = ( event ) => {
            this.props.dispatch( loginActions.usernameChange( event.target.value ) );
        };
        let onPasswordChange = ( event ) => {
            this.props.dispatch( loginActions.passwordChange( event.target.value ) );
        };
        let onSingInClick = () => {
            console.log( 'onSingInClick', this.props.loginReducer );
        };
        return (
            <div className="login">
                <h4>{this.props.loginReducer.title}</h4>
                <TextField
                    name="username"
                    onChange={onUsernameChange}
                    value={this.props.loginReducer.username}
                    type="text"
                    placeholder="username"
                    required={true}
                />
                <br/>
                <TextField
                    name="password"
                    onChange={onPasswordChange}
                    value={this.props.loginReducer.password}
                    type="password"
                    placeholder="password"
                    required={true}
                />
                <br/>
                <br/>
                <Button raised onClick={onSingInClick} color="primary">Log in</Button>
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
