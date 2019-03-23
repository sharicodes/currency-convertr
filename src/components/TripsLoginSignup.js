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
    if (this.state.login === true) {
      return <LoginForm />;
    } else {
      return null;
    }
  };

  handleSignup = () => {
    this.setState({
      signup: true
    });
  };

  showSignupForm = () => {
    if (this.state.signup === true) {
      return <SignUpForm />;
    }
  };

  render() {
    return (
      <React.Fragment>
        {this.showLoginForm()}
        <input
          className="loginButton"
          onClick={this.handleLogin}
          type="submit"
          value="Log In"
        />
        {this.showSignupForm()}
        <input
          className="signupbutton"
          onClick={this.handleSignUp}
          type="submit"
          value="Sign Up"
        />

        <input
          className="button"
          onClick={() => this.props.returnToCurrent()}
          type="submit"
          value="Return to Current Exchange Rates"
        />
      </React.Fragment>
    );
  }
}

export default TripsLoginSignup;
