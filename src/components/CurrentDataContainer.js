import React, { Component } from "react";
import CurrentInputForm from "./CurrentInputForm";
import HistoricalDataForm from "./HistoricalDataForm";
import Trips from "./Trips";
import background from "../background.jpg";

class CurrentDataContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      historical: false,
      trips: false,
      clear: false,
      showTripsButton: true,
      showHistoricalButton: true
    };
  }
  handleClickClear = () => {
    this.setState({
      clear: true
    });
  };
  showTrips = () => {
    this.setState({
      trips: true
    });
  };

  showHistorical = () => {
    this.setState({
      historical: true
    });
  };

  showHistoricalForm = () => {
    if (this.state.historical === true) {
      return <HistoricalDataForm />;
    } else if (this.state.historical === false && this.state.trips === false) {
      return <CurrentInputForm />;
    } else if (this.state.trips === true) {
      return <Trips />;
    }
  };

  render() {
    return (
      <div className="historicalDataButton">
        {this.showHistoricalForm()}

        {this.state.historical === false && this.state.trips === false ? (
          <input
            className="button"
            onClick={this.showHistorical}
            type="submit"
            value="View Historical Data"
          />
        ) : null}
        <div className="tripsButton" />

        {this.state.trips === false && this.state.historical === false ? (
          <input
            className="button"
            onClick={this.showTrips}
            type="submit"
            value="Planning a Trip?"
          />
        ) : null}

        <br />
        <br />
        <div className="CurrentDataContainer">
          {<img src={background} className="background" alt="currency" />}
        </div>
      </div>
    );
  }
}

export default CurrentDataContainer;
