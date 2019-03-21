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
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = () => {
    fetch("http://localhost:3001/api/v1/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accepts: "application/json"
      },
      body: JSON.stringify(this.state)
    })
      .then(res => res.json())
      .then(response => {
        this.setState(
          {
            currentUser: response
          },
          () => console.log(this.state.currentUser)
        );
      });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
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

        <div className="button" />
        <button type="submit">click to complete Login</button>
      </form>
    );
  }
}

export default LoginForm;
