import React, { Component } from "react";
import CurrentInputForm from "./CurrentInputForm";
import background from "../background.jpg";
import codes from "./CodeData";

class CurrentDataContainer extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     baseCurrCode: "USD",
  //     baseCurrName: "US Dollar",
  //     baseCurrAmount: 1,
  //     desiredCurrCode: "",
  //     desiredCurrName: "",
  //     exchangeRate: 0,
  //     desiredCurrAmount: 0,
  //     rates: {}
  //   };
  // }

  render() {
    //console.log(codes);
    return (
      <div className="CurrentDataContainer">
        <h1>Test- CurrencyDataContainer</h1>
        {/*  <img src={background} className="background" alt="currency" />*/}

        <CurrentInputForm
        //   baseCurrCode={this.state.baseCurrCode}
        //   baseCurrName={this.state.baseCurrName}
        //   baseCurrAmount={this.state.baseCurrAmount}
        //   desiredCurrCode={this.state.desiredCurrCode}
        //   desiredCurrName={this.state.desiredCurrCode}
        //   exchangeRate={this.state.exchangeRate}
        //   desiredCurrAmount={this.state.desiredCurrAmount}
        />
      </div>
    );
  }
}

export default CurrentDataContainer;
