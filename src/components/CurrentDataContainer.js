import React, { Component } from "react";
import CurrentInputForm from "./CurrentInputForm";
import HistoricalDataForm from "./HistoricalDataForm";
import SaveForm from "./SaveForm";
import background from "../background.jpg";

class CurrentDataContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      historical: false,
      save: false
    };
  }

  showHistorical = () => {
    this.setState({
      historical: true
    });
  };
  showSave = () => {
    this.setState({
      save: true
    });
  };
  showHistoricalForm = () => {
    if (this.state.historical === true) {
      return <HistoricalDataForm />;
    } else if (this.state.historical === false && this.state.save === false) {
      return <CurrentInputForm />;
    } else if (this.state.historical === false && this.state.save === true) {
      return <SaveForm />;
    }
  };

  render() {
    return (
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
        <div className="saveButton">
          {this.state.save === false ? (
            <input
              className="button"
              onClick={this.showSave}
              type="submit"
              value="Save This Request"
            />
          ) : null}
        </div>
        <br />
        <div className="CurrentDataContainer">
          {<img src={background} className="background" alt="currency" />}
        </div>
      </div>
    );
  }
}

export default CurrentDataContainer;
