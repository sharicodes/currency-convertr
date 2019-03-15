import React, { Component } from "react";

class CurrentResponse extends Component {
  render() {
    //console.log(this.props);
    return (
      <div>
        <h1> Test-CurrentResponse </h1>
        <h2> Exchange Rate: {this.props.exchangeRate} </h2>
        <h2> Amount: {this.props.desiredCurrAmount}</h2>
      </div>
    );
  }
}

export default CurrentResponse;
