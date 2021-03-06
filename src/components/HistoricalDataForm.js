import React, { Component } from "react";
import codes from "./CodeData";
import historicalRates from "./ChartDataTest";
import ReactChartkick, { AreaChart } from "react-chartkick";
import Chart from "chart.js";

ReactChartkick.addAdapter(Chart);

class HistoricalDataForm extends Component {
  constructor() {
    super();
    this.state = {
      usCurrCode: "USD",
      usCurrName: "US Dollar",
      convertCurrCode: "",
      convertCurrName: ""
    };
  }

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
  // handleHistoricalClick = event => {
  //   //console.log(this.state.convertCurrCode);
  //   event.preventDefault();
  //   let targetHistCode = this.state.convertCurrCode;
  //   console.log(targetHistCode);

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
    return (
      <React.Fragment>
        <form className="HistoricalInputForm">
          <div className="clearButton">
            <input
              className="button"
              onClick={this.handleHistoricalClickClear}
              type="submit"
              value="Return to Current Rate Converter"
            />
          </div>
          <h1> Historical Rates- 5 Year trend </h1>
          <label>Enter the currency you have: </label>
          <input
            className="button"
            type="text"
            name="usCurrName"
            data-id={this.usCurrName}
            defaultValue={this.state.usCurrName}
            onChange={this.handleHistoricalChange}
          />
          <label> Enter the currency you want: </label>
          <select
            className="button"
            name="convertCurrCode"
            onChange={this.handleHistoricalSelectChange}
          >
            {this.createHistoricalOptions()}
          </select>
          <br /> <br />
        </form>
        <AreaChart
          colors={["#163913"]}
          xtitle="Time"
          ytitle="Rate"
          data={historicalRates[this.state.convertCurrCode]}
        />
      </React.Fragment>
    );
  }
}

//<div className="showHistoryChartButton">

//<input
//className="button"
//  onClick={this.handleHistoricalClick}
// type="submit"
// value="View Historical Rates"
//>
//</div>

export default HistoricalDataForm;
