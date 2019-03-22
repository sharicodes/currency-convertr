import React, { Component } from "react";
import "../css/App.css";
import Header from "./Header";
import CurrentDataContainer from "./CurrentDataContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <CurrentDataContainer />
      </div>
    );
  }
}

export default App;
