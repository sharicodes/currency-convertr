import React, { Component } from "react";

import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";

class SaveTrip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: false,
      signup: false
    };
  }
  findCurrUser = () => {};
  handleLogin = () => {
    this.setState({
      login: true
    });
  };

  handleSignUp = () => {
    this.setState({
      signup: true
    });
  };

  showLoginForm = () => {
    if (this.state.login === true) return <LoginForm />;
  };

  showSignupForm = () => {
    if (this.state.signup === true) return <SignUpForm />;
  };

  render() {
    return (
      <React.Fragment>
        <input
          className="loginButton"
          onClick={this.handleLogin}
          defaultValue="Log In"
        />
        <input
          className="signupbutton"
          onClick={this.handleSignUp}
          defaultValue="Sign Up"
        />
        {this.showLoginForm()}
        <br />
        {this.showSignupForm()}
      </React.Fragment>
    );
  }
}

export default SaveTrip;
//
