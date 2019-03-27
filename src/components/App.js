import React, { Component } from "react";
import "../css/App.css";
import NavBar from "./NavBar";
import cclogo from "../cclogo.png";
import CurrentDataContainer from "./CurrentDataContainer";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Index() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

function AppRouter() {
  return (
    <Router>
      <div>
        <div className="NavBar">
          <img src={cclogo} className="logo" alt="logo" />
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/"> Current Exchange Converter</Link>
            </li>
            <li>
              <Link to="/about/"> Historical Data- 5 year trends</Link>
            </li>
            <li>
              <Link to="/users/"> Trip Planning</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={CurrentDataContainer} />
        <Route path="/about/" component={About} />
        <Route path="/users/" component={Users} />
      </div>
    </Router>
  );
}
export default AppRouter;

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <NavBar />
//         <CurrentDataContainer />
//       </div>
//     );
//   }
// }
