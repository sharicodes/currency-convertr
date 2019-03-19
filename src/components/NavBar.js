import React, { Component } from "react";
import cclogo from "../cclogo.png";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";

class NavBar extends Component {
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
    }
  };
  handleSignUp = () => {
    this.setState({
      signup: true
    });
  };

  showSignUpForm = () => {
    if (this.state.signup === true) {
      return <SignUpForm />;
    }
  };
  render() {
    return (
      <div>
        <div className="NavBar">
          <img src={cclogo} className="logo" alt="logo />" />
        </div>
        <div className="loginbutton">
          {this.showLoginForm()}
          <input
            className="button"
            onClick={this.handleLogin}
            type="submit"
            value="Log In"
          />
        </div>
        <div className="signupbutton">
          {this.showSignUpForm()}
          <input
            className="button"
            onClick={this.handleSignUp}
            type="submit"
            value="Sign Up"
          />
        </div>
      </div>
    );
  }
}

export default NavBar;
