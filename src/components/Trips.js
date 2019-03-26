import React, { Component } from "react";
import codes from "./CodeData";
import CurrentResponse from "./CurrentResponse";
import CurrentInputForm from "./CurrentInputForm";

class Trips extends Component {
  constructor() {
    super();

    this.state = {
      baseCurrCode: "USD",
      baseCurrName: "US Dollar",
      baseCurrAmount: 1,
      desiredCurrCode: "",
      desiredCurrName: "",
      exchangeRate: 0,
      desiredCurrAmount: 0,
      rates: {},
      converterCount: []
    };
  }
  componentDidMount() {
    fetch(
      // real endpoint

      // "http://www.apilayer.net/api/live?access_key=b9bba49cc12e1fab9b229b77c1868a4a"
      // json-server --watch db.json -p 4000
      "http://localhost:4000/quotes"
    )
      .then(response => response.json())
      .then(data => {
        //console.log(data);
        this.setState({
          rates: data.quotes
        });
      });
  }

  handleChange = event => {
    //  console.log(event.target.name, event.target.value);
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSelectChange = event => {
    //console.log(event.target.name, event.target.value);
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  handleClick = event => {
    //console.log(this.state.desiredCurrCode);
    event.preventDefault();
    let targetCode = this.state.desiredCurrCode;
    //  console.log(targetCode);
    let rate = this.state.rates[targetCode];
    // console.log(rate);
    // console.log(this.state.baseCurrAmount);
    let amount = this.state.baseCurrAmount;
    //console.log(amount);
    let finalTotal = rate * amount;
    finalTotal = finalTotal.toFixed(2);
    //console.log(finalTotal);

    this.setState({
      desiredCurrAmount: finalTotal,
      exchangeRate: rate
    });
  };

  handleClickClear = () => {
    this.setState({
      tripName: "",
      baseCurrCode: "USD",
      baseCurrName: "US Dollar",
      baseCurrAmount: 1,
      desiredCurrCode: "",
      desiredCurrName: "",
      exchangeRate: 0,
      desiredCurrAmount: 0
    });
  };

  handleAddCurrencies = () => {
    // event.preventDefault();
    // let converters = this.state.converterCount + 1;
    // console.log(converters);

    this.setState({
      converterCount: [...this.state.converterCount, "converter"]
    });
    // return (
    //   <React.Fragment>
    //     <CurrentInputForm />
    //   </React.Fragment>
    // );
  };

  renderCurrencyConverters = () => {
    console.log(this.state.converterCount);
    // let i = 0;
    // while (i < this.state.converterCount) {
    //   console.log(`running ${this.state.converterCount} times`);
    //   i++;
    //   return <CurrentInputForm />;
    // }
    return this.state.converterCount.map(converter => {
      return <CurrentInputForm />;
    });
  };

  createOptions = () => {
    return codes.map(code => {
      return (
        <option key={code.code} value={code.code}>
          {code.name}
        </option>
      );
    });
  };

  render() {
    console.log(this.state);
    return (
      <React.Fragment>
        <h1> Track Exchange Rates for your trip! </h1>
        <form className="CurrentInputForm">
          <label>Enter a name for your trip </label>
          <input
            className="inputButton"
            type="text"
            name="tripName"
            value={this.state.tripName}
            onChange={this.handleChange}
          />
          <br />
          <br />
          <label>Enter the currency you have: </label>
          <input
            className="inputButton"
            type="text"
            name="baseCurrName"
            value={this.state.baseCurrName}
            onChange={this.handleChange}
          />
          <label> Enter the amount you want to exchange: </label>
          <input
            className="inputButton"
            type="text"
            name="baseCurrAmount"
            onChange={this.handleChange}
            value={this.state.baseCurrAmount}
          />
          <label> Enter the currency you want: </label>
          <select
            className="inputButton"
            name="desiredCurrCode"
            value={this.state.desiredCurrCode}
            onChange={this.handleSelectChange}
          >
            {this.createOptions()}
          </select>
          <br /> <br />
          <div>
            <input
              className="convertButton"
              onClick={this.handleClick}
              type="submit"
              value="Convert!"
            />
            <br /> <br />
          </div>
          <button
            className="button"
            onClick={() => this.handleClickClear()}
            value="Clear request"
          >
            Clear Request
          </button>
          <CurrentResponse
            exchangeRate={this.state.exchangeRate}
            desiredCurrAmount={this.state.desiredCurrAmount}
          />
          <br /> <br />
        </form>
        {this.renderCurrencyConverters()}
        <div className="clearButton">
          <input
            className="button"
            onClick={this.handleHistoricalClickClear}
            type="submit"
            value="Return to Current Rate Converter"
          />
        </div>
        <button className="button" onClick={this.handleAddCurrencies}>
          Add additional currencies to your trip
        </button>
      </React.Fragment>
    );
  }
}

export default Trips;
