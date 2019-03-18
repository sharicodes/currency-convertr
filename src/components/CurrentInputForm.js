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

    this.setState({ desiredCurrAmount: finalTotal }, () => {
      //console.log(this.state.desiredCurrAmount);
    });

    this.setState({ exchangeRate: rate }, () => {
      //  console.log(this.state.exchangeRate);
    });
  };
  handleClickClear = event => {
    //  console.log(event.target.name, event.target.value);
    this.setState({ desiredCurrAmount: 0 }, () => {
      //console.log(this.state.desiredCurrAmount);
    });

    this.setState({ exchangeRate: 0 }, () => {
      //  console.log(this.state.exchangeRate);
    });
    this.setState({ baseCurrAmount: 1 }, () => {
      //  console.log(this.state.baseCurrAmount);
    });

    this.setState({ desiredCurrName: "" }, () => {
      //  console.log(this.desiredCurrName);
    });
    this.setState({ desiredCurrCode: "" }, () => {
      //  console.log(this.desiredCurrCode);
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
    return (
      <div>
        <h1> Current Exchange Rates </h1>
        <form className="CurrentInputForm">
          <div className="baseName">
            <label>Enter the currency you have: </label>
            <input
              type="text"
              name="baseCurrName"
              data-id={this.baseCurrName}
              defaultValue={this.state.baseCurrName}
              onChange={this.handleChange}
            />
          </div>
          <div className="baseAmount">
            <label>Enter the amount you want to exchange: </label>
            <input
              type="text"
              name="baseCurrAmount"
              onChange={this.handleChange}
              //defaultValue={this.state.baseCurrAmount}
            />
          </div>
          <div className="desiredCurrName">
            <label>Enter the currency you want:</label>
            <select
              className="selection dropdown"
              name="desiredCurrCode"
              onChange={this.handleSelectChange}
            >
              {this.createOptions()}
            </select>
          </div>

          <div className="convertButton">
            <input
              className="button"
              onClick={this.handleClick}
              type="submit"
              value="Convert!"
            />
          </div>
          <div className="clearButton">
            <input
              className="button"
              onClick={this.handleClickClear}
              type="submit"
              value="Clear request"
            />
          </div>
        </form>
        <div>
          <CurrentResponse
            exchangeRate={this.state.exchangeRate}
            desiredCurrAmount={this.state.desiredCurrAmount}
          />
        </div>
      </div>
    );
  }
}

export default CurrentInputForm;
