import React, { Component } from "react";
import "../css/App.css";
import NavBar from "./NavBar";
import CurrentDataContainer from "./CurrentDataContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <CurrentDataContainer />
      </div>
    );
  }
}

export default App;
