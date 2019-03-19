import React, { Component } from "react";

class CurrentResponse extends Component {
  render() {
    //console.log(this.props);
    return (
      <div>
        <div>
          <h3> Exchange Rate: {this.props.exchangeRate} </h3>
          <h3> Amount: {this.props.desiredCurrAmount}</h3>
        </div>
      </div>
    );
  }
}

export default CurrentResponse;
