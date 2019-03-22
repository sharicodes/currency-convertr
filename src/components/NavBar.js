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
  findCurrUser = () => {};

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
    console.log(this.props);
    return (
      <React.Fragment>
        <div className="NavBar">
          <img src={cclogo} className="logo" alt="logo" />

          {this.showLoginForm()}
          <input
            className="loginButton"
            onClick={this.handleLogin}
            type="submit"
            value="Log In"
          />
          {this.showSignUpForm()}
          <input
            className="signupbutton"
            onClick={this.handleSignUp}
            type="submit"
            value="Sign Up"
          />
        </div>
      </React.Fragment>
    );
  }
}

export default NavBar;
