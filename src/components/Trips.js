import React, { Component } from "react";
import codes from "./CodeData";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import TripsResponse from "./TripsResponse.js";

class Trips extends Component {
  constructor() {
    super();

    this.state = {
      tripName: "",
      baseCurrCode: "USD",
      baseCurrName: "US Dollar",
      baseCurrAmountOne: 1,
      baseCurrAmountTwo: 1,
      baseCurrAmountThree: 1,
      desiredCurrCodeOne: "",
      desiredCurrCodeTwo: "",
      desiredCurrCodeThree: "",
      desiredCurrNameOne: "",
      desiredCurrNameTwo: "",
      desiredCurrNameThree: "",
      exchangeRateOne: 0,
      exchangeRateTwo: 0,
      exchangeRateThree: 0,
      desiredCurrAmountOne: 0,
      desiredCurrAmountTwo: 0,
      desiredCurrAmountThree: 0,
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
    let targetCodeOne = this.state.desiredCurrCodeOne;
    let targetCodeTwo = this.state.desiredCurrCodeTwo;
    let targetCodeThree = this.state.desiredCurrCodeThree;
    //  console.log(targetCode);
    let rateOne = this.state.rates[targetCodeOne];
    let rateTwo = this.state.rates[targetCodeTwo];
    let rateThree = this.state.rates[targetCodeThree];
    // console.log(rate);
    // console.log(this.state.baseCurrAmount);
    let amountOne = this.state.baseCurrAmountOne;
    let amountTwo = this.state.baseCurrAmountTwo;
    let amountThree = this.state.baseCurrAmountThree;
    //console.log(amount);
    let finalTotalOne = rateOne * amountOne;
    finalTotalOne = finalTotalOne.toFixed(2);
    let finalTotalTwo = rateTwo * amountTwo;
    finalTotalTwo = finalTotalTwo.toFixed(2);
    let finalTotalThree = rateThree * amountThree;
    finalTotalThree = finalTotalThree.toFixed(2);
    //console.log(finalTotal);

    this.setState({
      desiredCurrAmountOne: finalTotalOne,
      desiredCurrAmountTwo: finalTotalTwo,
      desiredCurrAmountThree: finalTotalThree,
      exchangeRateOne: rateOne,
      exchangeRateTwo: rateTwo,
      exchangeRateThree: rateThree
    });
  };

  handleClickClear = () => {
    //  console.log(event.target.name, event.target.value);
    //this.setState = {};
    //this.setState({});
    this.setState({
      tripName: "",
      baseCurrCode: "USD",
      baseCurrName: "US Dollar",
      baseCurrAmountOne: 1,
      baseCurrAmountTwo: 1,
      baseCurrAmountThree: 1,
      desiredCurrCodeOne: "",
      desiredCurrCodeTwo: "",
      desiredCurrCodeThree: "",
      desiredCurrNameOne: "",
      desiredCurrNameTwo: "",
      desiredCurrNameThree: "",
      exchangeRateOne: 0,
      exchangeRateTwo: 0,
      exchangeRateThree: 0,
      desiredCurrAmountOne: 0,
      desiredCurrAmountTwo: 0,
      desiredCurrAmountThree: 0
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
    //console.log(this.state);
    return (
      <React.Fragment>
        <h1> Track Exchange Rates for your trip! </h1>
        <h3> Enter up to 3 currencies </h3>

        <form className="CurrentInputForm">
          <label>Starting currency USD: </label>
          <input
            className="inputButton"
            type="text"
            name="baseCurrNameOne"
            value={this.state.baseCurrName}
            onChange={this.handleChange}
          />
          <br />
          <label>
            {" "}
            Enter the amount you want to exchange for Currency #1:{" "}
          </label>
          <input
            className="inputButton"
            type="text"
            name="baseCurrAmountOne"
            onChange={this.handleChange}
            value={this.state.baseCurrAmountOne}
          />
          <label> Enter the currency you want for Currency #1: </label>
          <select
            className="inputButton"
            name="desiredCurrCodeOne"
            value={this.state.desiredCurrCodeOne}
            onChange={this.handleSelectChange}
          >
            {this.createOptions()}
          </select>
          <br />
          <label>
            {" "}
            Enter the amount you want to exchange for Currency #2:{" "}
          </label>
          <input
            className="inputButton"
            type="text"
            name="baseCurrAmountTwo"
            onChange={this.handleChange}
            value={this.state.baseCurrAmountTwo}
          />
          <label> Enter the currency you want for Currency #2: </label>
          <select
            className="inputButton"
            name="desiredCurrCodeTwo"
            value={this.state.desiredCurrCodeTwo}
            onChange={this.handleSelectChange}
          >
            {this.createOptions()}
          </select>
          <br />
          <label>
            {" "}
            Enter the amount you want to exchange for Currency #3:{" "}
          </label>
          <input
            className="inputButton"
            type="text"
            name="baseCurrAmountThree"
            onChange={this.handleChange}
            value={this.state.baseCurrAmountThree}
          />
          <label> Enter the currency you want for Currency #3: </label>
          <select
            className="inputButton"
            name="desiredCurrCodeThree"
            value={this.state.desiredCurrCodeThree}
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
      </React.Fragment>
    );
  }
}

export default Trips;
