import React, { Component } from "react";

import cclogo from "../cclogo.png";

class NavBar extends Component {
  render() {
    return (
      <div className="NavBar">
        <img src={cclogo} className="logo" alt="logo />" />
      </div>
    );
  }
}

export default NavBar;
