import React, { Component } from "react";
import CurrentInputForm from "./CurrentInputForm";
import SaveTrip from "./SaveTrip";

class Trips extends Component {
  constructor(props) {
    super(props);
    //console.log(props);
    this.state = {
      rates: {},
      converterCount: [],
      save: false,
      tripName: ""
    };
  }

  handleSaveTrip = event => {
    //console.log(event.target.name, event.target.value);
    this.setState({
      save: true,
      [event.target.name]: event.target.value
    });
  };

  showSave = () => {
    if (this.state.save === true) {
      return <SaveTrip />;
    }
  };
  handleChange = event => {
    //console.log(event.target.name, event.target.value);
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleAddCurrencies = () => {
    this.setState({
      converterCount: [...this.state.converterCount, "converter"]
    });
  };

  renderCurrencyConverters = () => {
    //  console.log(this.state.converterCount);

    return this.state.converterCount.map(converter => {
      return <CurrentInputForm />;
    });
  };

  render() {
    //console.log(this.state);
    return (
      <React.Fragment>
        <form className="CurrentInputForm">
          <div className="clearButton">
            <input
              className="button"
              onClick={this.handleHistoricalClickClear}
              type="submit"
              value="Return to Current Rate Converter"
            />
          </div>
          <h2> Calculate Exchange Rates for your trip- </h2>
          <label>Enter a name for your trip </label>
          <input
            className="inputButton"
            type="text"
            name="tripName"
            value={this.state.tripName}
            onChange={this.handleChange}
          />
        </form>

        <br />
        {this.renderCurrencyConverters()}
        <br />
        <button className="button" onClick={this.handleAddCurrencies}>
          Add currencies to your trip
        </button>
        <br />
      </React.Fragment>
    );
  }
}

export default Trips;
// <br />
// <button className="button" onClick={this.handleSaveTrip}>
//   Save this trip
// </button>
// {this.showSave()}
// <br />
