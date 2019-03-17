import React, { Component } from "react";

class CurrentResponse extends Component {
  render() {
    //console.log(this.props);
    return (
      <div>
        <div>
          <h2> Exchange Rate: {this.props.exchangeRate} </h2>
          <h2> Amount: {this.props.desiredCurrAmount}</h2>
        </div>
      </div>
    );
  }
}

export default CurrentResponse;
