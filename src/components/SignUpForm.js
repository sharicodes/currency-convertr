import React, { Component } from "react";

class SignUpForm extends Component {
  constructor() {
    super();
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      passwordConfirmation: "",
      currentUser: {}
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  createUser = () => {
    fetch("http://localhost:3001/api/v1/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accepts: "application/json"
      },
      body: JSON.stringify({
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        email: this.state.email,
        password: this.state.password
      })
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

  handleSubmit = event => {
    if (this.state.password === this.state.passwordConfirmation) {
      this.createUser();
    } else {
      alert("Passwords don't match!");
    }
  };

  render() {
    return (
      <React.Fragment>
        <form>
          <div className="button" />

          <input
            type="text"
            placeholder="enter your first name"
            name="first_name"
            value={this.state.first_name}
            onChange={this.handleChange}
          />
          <div className="button" />

          <input
            type="text"
            placeholder="enter your last name"
            name="last_name"
            value={this.state.last_name}
            onChange={this.handleChange}
          />
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
            placeholder="enter a password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <div className="button" />
          <input
            type="password"
            placeholder="re-enter the password"
            name="passwordConfirmation"
            value={this.state.passwordConfirmation}
            onChange={this.handleChange}
          />
        </form>
        <div className="button">
          <button onClick={this.handleSubmit}>click to complete Sign Up</button>
        </div>
      </React.Fragment>
    );
  }
}

export default SignUpForm;
