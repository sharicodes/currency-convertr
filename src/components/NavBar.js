import React, { Component } from "react";
import cclogo from "../cclogo.png";

class NavBar extends Component {
  render() {
    console.log(this.props);
    return (
      <React.Fragment>
        <div className="NavBar">
          <img src={cclogo} className="logo" alt="logo" />
        </div>
      </React.Fragment>
    );
  }
}

export default NavBar;
