import React, { Component } from "react";
import cclogo from "../cclogo.png";

class Header extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="NavBar">
        <img src={cclogo} className="logo" alt="logo" />
      </div>
    );
  }
}

export default Header;
