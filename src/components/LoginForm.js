import React, { Component } from "react";

class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      currentUser: {}
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = () => {
    // console.log(this.state.email);
    fetch(`http://localhost:3001/api/v1/users/id?email=${this.state.email}`)
      .then(res => res.json())
      .then(user => {
        console.log(user);
        this.setState({
          currentUser: user
        });
      });
  };

  render() {
    // console.log(this.state);
    // console.log(this.state.currentUser);
    return (
      <React.Fragment>
        <form>
          <div className="button" />

          <input
            type="text"
            placeholder="enter your email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <div className="button" />

          <input
            type="password"
            placeholder="enter your password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
        </form>

        <div className="button">
          <button onClick={this.handleSubmit}>click to complete Login</button>
        </div>
      </React.Fragment>
    );
  }
}

export default LoginForm;
