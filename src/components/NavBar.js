import React, { Component } from "react";
import cclogo from "../cclogo.png";

class NavBar extends Component {
  render() {
    return (
      <div>
        <div className="NavBar">
          <img src={cclogo} className="logo" alt="logo />" />
        </div>
        <div className="loginbutton">
          <input
            className="button"
            onClick={this.handleLogin}
            type="submit"
            value="click here to login or signup"
          />
        </div>
      </div>
    );
  }
}

export default NavBar;
