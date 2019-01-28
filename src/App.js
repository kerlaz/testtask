import React, {Component} from 'react';
import {connect} from 'react-redux';
import './App.css';
import ErrorMessage from './components/ErrorMessage';
import Auth from "./components/Auth";
import Profile from "./components/Profile";
import {logIn} from "./actions"


class App extends Component {
    submitHandler(e){
        e.preventDefault();
        let data = {
            email: e.target.email.value,
            password: e.target.password.value
        };
        this.props.logInHandler(data);
    }

    render() {
        return (
            <div className="App">
                {this.props.showErrorMessage && <ErrorMessage text={this.props.errorText}/>}
                {this.props.authorized ? <Profile data={this.props.profile}/> : <Auth submitHandler={this.submitHandler.bind(this)}/>}
            </div>
        );
    }
}

export default connect(
    (state, ownProps) => ({
        showErrorMessage:state.errors.showMessage,
        errorText:state.errors.errorText,
        authorized:state.user.authorized,
        profile:state.user.userInfo,
        ownProps
    }),
    dispatch => ({
        logInHandler: (data)=>{dispatch(logIn(data))}
    })
)(App);
