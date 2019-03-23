// import React, { Component } from "react";
// import codes from "./CodeData";
//
// class Trips extends Component {
//   constructor() {
//     super();
//
//     this.state = {
//       tripName: "",
//       baseCurrCode: "USD",
//       baseCurrName: "US Dollar",
//       baseCurrAmountOne: 1,
//       baseCurrAmountTwo: 1,
//       baseCurrAmountTwo: 1,
//       desiredCurrCodeOne: "",
//       desiredCurrCodeTwo: "",
//       desiredCurrCodeThree: "",
//       desiredCurrNameOne: "",
//       desiredCurrNameTwo: "",
//       desiredCurrNameThree: "",
//       exchangeRateOne: 0,
//       exchangeRateTwo: 0,
//       exchangeRateThree: 0,
//       desiredCurrAmountOne: 0,
//       desiredCurrAmountTwo: 0,
//       desiredCurrAmountThree: 0,
//       rates: {}
//     };
//   }
//
//   componentDidMount() {
//     fetch(
//       // real endpoint
//
//       // "http://www.apilayer.net/api/live?access_key=b9bba49cc12e1fab9b229b77c1868a4a"
//       // json-server --watch db.json -p 4000
//       "http://localhost:4000/quotes"
//     )
//       .then(response => response.json())
//       .then(data => {
//         //console.log(data);
//         this.setState({
//           rates: data.quotes
//         });
//       });
//   }
//
//   //handleChange = event => {
//   //   //  console.log(event.target.name, event.target.value);
//   //   this.setState({
//   //     [event.target.name]: event.target.value
//   //   });
//   // };
//   //
//   // handleSelectChange = event => {
//   //   //console.log(event.target.name, event.target.value);
//   //   this.setState({
//   //     [event.target.name]: event.target.value
//   //   });
//   // };
//   // handleClick = event => {
//   //   //console.log(this.state.desiredCurrCode);
//   //   event.preventDefault();
//   //   let targetCode = this.state.desiredCurrCode;
//   //   //  console.log(targetCode);
//   //   let rate = this.state.rates[targetCode];
//   //   // console.log(rate);
//   //   // console.log(this.state.baseCurrAmount);
//   //   let amount = this.state.baseCurrAmount;
//   //   //console.log(amount);
//   //   let finalTotal = rate * amount;
//   //   finalTotal = finalTotal.toFixed(2);
//   //   //console.log(finalTotal);
//   //
//   //   this.setState({
//   //     desiredCurrAmount: finalTotal,
//   //     exchangeRate: rate
//   //   });
//   // };
//   //
//   // handleClickClear = () => {
//   //   //  console.log(event.target.name, event.target.value);
//   //   //this.setState = {};
//   //   //this.setState({});
//   //   this.setState({
//   //     baseCurrCode: "USD",
//   //     baseCurrName: "US Dollar",
//   //     baseCurrAmount: 1,
//   //     desiredCurrCode: "",
//   //     desiredCurrName: "",
//   //     exchangeRate: 0,
//   //     desiredCurrAmount: 0
//   //   });
//   // };
//   //
//   // createOptions = () => {
//   //   return codes.map(code => {
//   //     return (
//   //       <option key={code.code} value={code.code}>
//   //         {code.name}
//   //       </option>
//   //     );
//   //   });
//   // };
//
//   render() {
//     //console.log(this.state);
//     return (
//       <React.Fragment>
//         <h1> Track Exchange Rates for your trip! </h1>
//         <h3> Enter up to 3 currencies </h3>
//         {this.createOptions()}
//         <form className="CurrentInputForm">
//           <label>Starting currency USD: </label>
//           <input
//             className="inputButton"
//             type="text"
//             name="baseCurrNameOne"
//             value={this.state.baseCurrName}
//             onChange={this.handleChange}
//           />
//           <label> Enter the amount you want to exchange for Currency#1: </label>
//           <input
//             className="inputButton"
//             type="text"
//             name="baseCurrAmount"
//             onChange={this.handleChange}
//             value={this.state.baseCurrAmountOne}
//           />
//           <label> Enter the currency you want for Currency#1: </label>
//           <select
//             className="inputButton"
//             name="desiredCurrCode"
//             value={this.state.desiredCurrCodeOne}
//             onChange={this.handleSelectChange}
//           />
//           <label> Enter the amount you want to exchange for Currency#2: </label>
//           <input
//             className="inputButton"
//             type="text"
//             name="baseCurrAmount"
//             onChange={this.handleChange}
//             value={this.state.baseCurrAmountTwo}
//           />
//           <label> Enter the currency you want for Currency#2: </label>
//           <select
//             className="inputButton"
//             name="desiredCurrCode"
//             value={this.state.desiredCurrCodeTwo}
//             onChange={this.handleSelectChange}
//           />
//           <label> Enter the amount you want to exchange for Currency#3: </label>
//           <input
//             className="inputButton"
//             type="text"
//             name="baseCurrAmount"
//             onChange={this.handleChange}
//             value={this.state.baseCurrAmountThree}
//           />
//           <label> Enter the currency you want for Currency#3: </label>
//           <select
//             className="inputButton"
//             name="desiredCurrCode"
//             value={this.state.desiredCurrCodeThree}
//             onChange={this.handleSelectChange}
//           />
//           <br /> <br />
//           <div>
//             <input
//               className="convertButton"
//               onClick={this.handleClick}
//               type="submit"
//               value="Convert!"
//             />
//             <br /> <br />
//           </div>
//         </form>
//         <button
//           className="button"
//           onClick={() => this.handleClickClear()}
//           value="Clear request"
//         >
//           Clear Request
//         </button>
//       </React.Fragment>
//     );
//   }
// }
//
// export default Trips;
