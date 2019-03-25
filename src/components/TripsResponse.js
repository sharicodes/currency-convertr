import React, { Component } from "react";

class TripsResponse extends Component {
  render() {
    //console.log(this.props);
    return (
      <div>
        <div>
          <h2> Exchange Rate #1: {this.props.exchangeRateOne} </h2>
          <h2> Amount in currency #1: {this.props.desiredCurrAmountOne}</h2>
          <h2> Exchange Rate #2: {this.props.exchangeRateTwo} </h2>
          <h2> Amount in currency #2: {this.props.desiredCurrAmountTwo}</h2>
          <h2> Exchange Rate #3: {this.props.exchangeRateThree} </h2>
          <h2> Amount in currency #3: {this.props.desiredCurrAmountThree}</h2>
        </div>
      </div>
    );
  }
}

export default TripsResponse;
