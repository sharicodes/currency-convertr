import React, { Component } from "react";
import codes from "./CodeData";
import CurrentResponse from "./CurrentResponse";

class CurrentInputForm extends Component {
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
      rates: {}
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
    //  console.log(event.target.name, event.target.value);
    //this.setState = {};
    //this.setState({});
    this.setState({
      baseCurrCode: "USD",
      baseCurrName: "US Dollar",
      baseCurrAmount: 1,
      desiredCurrCode: "",
      desiredCurrName: "",
      exchangeRate: 0,
      desiredCurrAmount: 0
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
        <h1> Current Exchange Rates </h1>
        <form className="CurrentInputForm">
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
        </form>
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
      </React.Fragment>
    );
  }
}

export default CurrentInputForm;
