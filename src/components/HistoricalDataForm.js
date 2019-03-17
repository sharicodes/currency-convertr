import React, { Component } from "react";
import codes from "./CodeData";

class HistoricalDataForm extends Component {
  constructor() {
    super();
    this.state = {
      usCurrCode: "USD",
      usCurrName: "US Dollar",
      convertCurrCode: "",
      convertCurrName: "",
      currExchangeRate: 0,
      threeMonthExchangeRate: 0,
      sixMonthExchangeRate: 0,
      oneYearExchangeRate: 0,
      threeYearExchangeRate: 0,
      fiveYearExchangeRate: 0,
      apiRates: {}
    };
  }

  // componentDidMount() {
  //   fetch(
  //     // real endpoint
  //
  //     // "http://www.apilayer.net/api/live?access_key=b9bba49cc12e1fab9b229b77c1868a4a"
  //     // json-server --watch db.json -p 4000
  //     "http://localhost:4000/quotes"
  //   )
  //     .then(response => response.json())
  //     .then(data => {
  //       //console.log(data);
  //       this.setState({
  //         rates: data.quotes
  //       });
  //     });
  // }

  handleHistoricalChange = event => {
    //  console.log(event.target.name, event.target.value);
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleHistoricalSelectChange = event => {
    //console.log(event.target.name, event.target.value);
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  // handleClick = event => {
  //   //console.log(this.state.desiredCurrCode);
  //   event.preventDefault();
  //   let targetCode = this.state.desiredCurrCode;
  //   //  console.log(targetCode);
  //   let rate = this.state.rates[targetCode];
  //   // console.log(rate);
  //   // console.log(this.state.baseCurrAmount);
  //   let amount = this.state.baseCurrAmount;
  //   //console.log(amount);
  //   let finalTotal = rate * amount;
  //   finalTotal = finalTotal.toFixed(2);
  //   //console.log(finalTotal);
  //
  //   this.setState({ desiredCurrAmount: finalTotal }, () => {
  //     //console.log(this.state.desiredCurrAmount);
  //   });
  //
  //   this.setState({ exchangeRate: rate }, () => {
  //     //  console.log(this.state.exchangeRate);
  //   });
  // };
  // handleClickClear = event => {
  //   //  console.log(event.target.name, event.target.value);
  //   this.setState({ desiredCurrAmount: 0 }, () => {
  //     //console.log(this.state.desiredCurrAmount);
  //   });
  //
  //   this.setState({ exchangeRate: 0 }, () => {
  //     //  console.log(this.state.exchangeRate);
  //   });
  //   this.setState({ baseCurrAmount: 1 }, () => {
  //     //  console.log(this.state.baseCurrAmount);
  //   });
  //
  //   this.setState({ desiredCurrName: "" }, () => {
  //     //  console.log(this.desiredCurrName);
  //   });
  //   this.setState({ desiredCurrCode: "" }, () => {
  //     //  console.log(this.desiredCurrCode);
  //   });
  // };
  //
  createHistoricalOptions = () => {
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
    //console.log(codes.filter(code => code.name === "Argentine Peso"));
    //  console.log(codes);

    return (
      <div>
        <h1> Historical Rate Input Form </h1>
        <form className="HistoricalInputForm">
          <div className="usCurrName">
            <label>Enter the currency you have: </label>
            <input
              type="text"
              name="usCurrName"
              data-id={this.usCurrName}
              defaultValue={this.state.usCurrName}
              onChange={this.handleHistoricalChange}
            />
          </div>
          <div className="desiredCurrName">
            <label>Enter the currency you want:</label>
            <select
              className="selection dropdown"
              name="convertCurrCode"
              onChange={this.handleHistoricalSelectChange}
            >
              {this.createHistoricalOptions()}
            </select>
          </div>

          <div className="convertButton">
            <input
              className="button"
              onClick={this.handleHistoricalClick}
              type="submit"
              value="View Historical Rates"
            />
          </div>
          <div className="clearButton">
            <input
              className="button"
              onClick={this.handleHistoricalClickClear}
              type="submit"
              value="Return to Currency Converter"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default HistoricalDataForm;
