import React, { Component } from "react";

class CurrentResponse extends Component {
  render() {
    //console.log(this.props);
    return (
      <div>
        <div>
          <h2> Current Exchange Rate: {this.props.exchangeRate} </h2>
          <h2> Amount in Currency: {this.props.desiredCurrAmount}</h2>
        </div>
      </div>
    );
  }
}

export default CurrentResponse;
