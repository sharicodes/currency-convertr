import React, { Component } from "react";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";

import background from "../background.jpg";

class TripsLoginSignup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: false,
      signup: false
    };
  }

  handleLogin = () => {
    this.setState({
      login: true
    });
  };

  showLoginForm = () => {
    if (this.state.login === true) return <LoginForm />;
  };

  showSignupForm = () => {
    if (this.state.signup === true) return <SignUpForm />;
  };

  handleSignUp = () => {
    this.setState({
      signup: true
    });
  };

  render() {
    return (
      <React.Fragment>
        {this.showLoginForm()}
        <input
          className="loginButton"
          onClick={this.handleLogin}
          value="Log In"
        />
        {this.showSignupForm()}
        <input
          className="signupbutton"
          onClick={this.handleSignUp}
          value="Sign Up"
        />
        <div className="clearButton">
          <input
            className="button"
            onClick={() => this.handleClickClear}
            type="submit"
            value="Return to Current Rate Converter"
          />
        </div>
      </React.Fragment>
    );
  }
}

export default TripsLoginSignup;
