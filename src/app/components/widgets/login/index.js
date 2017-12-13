'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import * as loginActions from './actions';
import * as loginFunctions from './functions';

export class Login extends Component {
    render() {
        let onSignInClick = () => {
            loginFunctions.login( this.props );
        };
        let onNameChange = ( event ) => {
            this.props.dispatch( loginActions.userNameChange( event.target.value ) );
        };
        let onPasswordChange = ( event ) => {
            this.props.dispatch( loginActions.userPasswordChange( event.target.value ) );
        };
        return (
            <div className="login">
                <h4>{this.props.loginReducer.title}</h4>
                <form className="form">
                    <TextField type="text" name="username" placeholder={this.props.loginReducer.labelusername} onChange={onNameChange}/>
                    <br/>
                    <TextField type="password" name="password" placeholder={this.props.loginReducer.labelpassword} onChange={onPasswordChange}/>
                    <p>
                        <Button raised onClick={onSignInClick} color="primary">{this.props.loginReducer.labelsubmit}</Button>
                    </p>
                </form>
                <p>
                    <strong>or</strong>
                </p>
                <p>
                    <Button raised href={"/login/google"} color="primary">{this.props.loginReducer.googleStatus}</Button>
                </p>
                <p>
                    <Button raised href={"/logout"} color="accent">logout</Button>
                </p>
                <strong>error: [{this.props.loginReducer.error}]</strong>
                <strong>logged: [{this.props.loginReducer.logged.toString()}]</strong>
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
