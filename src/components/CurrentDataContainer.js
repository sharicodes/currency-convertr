import React, { Component } from "react";
import CurrentInputForm from "./CurrentInputForm";
import HistoricalDataForm from "./HistoricalDataForm";
import background from "../background.jpg";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";

class CurrentDataContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      historical: false,
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

  showHistorical = () => {
    this.setState({
      historical: true
    });
  };

  showHistoricalForm = () => {
    if (this.state.historical === true) {
      return <HistoricalDataForm />;
    } else if (this.state.historical === false) {
      return <CurrentInputForm />;
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
        {this.showSignUpForm()}
        <input
          className="signupbutton"
          onClick={this.handleSignUp}
          type="submit"
          value="Sign Up"
        />

        <div className="historicalDataButton">
          {this.showHistoricalForm()}
          {this.state.historical === false ? (
            <input
              className="button"
              onClick={this.showHistorical}
              type="submit"
              value="View Historical Data"
            />
          ) : null}
          <br />
          <br />
          <div className="CurrentDataContainer">
            {<img src={background} className="background" alt="currency" />}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default CurrentDataContainer;
