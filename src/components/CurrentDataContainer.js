import React, { Component } from "react";
import CurrentInputForm from "./CurrentInputForm";
import HistoricalDataForm from "./HistoricalDataForm";
import background from "../background.jpg";

class CurrentDataContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      historical: false
    };
  }

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
      <div className="historicalDataButton">
        {this.showHistoricalForm()}
        <input
          className="button"
          onClick={this.showHistorical}
          type="submit"
          value="View Historical Data Instead"
        />
        <div className="CurrentDataContainer" />
      </div>
    );
  }
}

export default CurrentDataContainer;
