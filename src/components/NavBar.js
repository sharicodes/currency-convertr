import React, { Component } from "react";
import cclogo from "../cclogo.png";
// import LoginForm from "./LoginForm";
// import SignUpForm from "./SignUpForm";

class NavBar extends Component {
  // constructor(props) {
  //   super(props);
  // this.state = {
  //   login: false,
  //   signup: false
  // };
  //}
  // findCurrUser = () => {};
  //
  // handleLogin = () => {
  //   this.setState({
  //     login: true
  //   });
  // };
  //
  // showLoginForm = () => {
  //   if (this.state.login === true) {
  //     return <LoginForm />;
  //   }
  // };
  // handleSignUp = () => {
  //   this.setState({
  //     signup: true
  //   });
  // };
  //
  // showSignUpForm = () => {
  //   if (this.state.signup === true) {
  //     return <SignUpForm />;
  //   }
  // };
  render() {
    console.log(this.props);
    return (
      <div className="NavBar">
        <img src={cclogo} className="logo" alt="logo" />
      </div>
    );
  }
}

export default NavBar;
