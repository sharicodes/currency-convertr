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

  handleClick = event => {
    event.preventDefault();
    console.log(this.state.baseCurrAmount);
  };
  // this.state.rates["usdaud"]

  // submitFunction = (country, amount) => {
  //  let targetCode = codes.filter(code => code.name === country)
  //  let rate = this.state.rates[targetCode.code]
  //  let finalTotal = rate * amount
  //  this.setState({
  //    desiredCurrAmount: finalTotal
  //  })
  // }
  //

  render() {
    //console.log(this.state);
    //console.log(codes.filter(code => code.name === "Argentine Peso"));
    console.log(codes);
    return (
      <div>
        <h1> Test- CurrentInputForm </h1>
        <form className="CurrentInputForm">
          <div className="baseName">
            <label>Enter the currency you have: </label>
            <input
              type="text"
              name="baseCurrName"
              data-id={this.baseCurrName}
              defaultValue={this.state.baseCurrName}
            />
          </div>
          <div className="baseAmount">
            <label>Enter the amount you want to exchange: </label>
            <input
              type="text"
              name="baseCurrAmount"
              defaultValue={this.state.baseCurrAmount}
            />
          </div>
          <div className="desiredCurrName">
            <label>Enter the currency you want:</label>
            <select value={codes.name} />
          </div>
          <div className="convertButton">
            <input
              className="button"
              onClick={this.handleClick}
              type="submit"
              value="Convert!"
            />
          </div>
        </form>
        <CurrentResponse />
      </div>
    );
  }
}

export default CurrentInputForm;
