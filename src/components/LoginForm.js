import React, { Component } from "react";

class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      fields: {}
    };
  }

  handleChange = e => {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({
      fields
    });
  };

  submitloginForm = e => {
    e.preventDefault();

    let fields = {};
    fields["password"] = "";
    this.setState({ fields: fields });
    alert("Welcome back!");
  };

  render() {
    return (
      <div id="login form">
        <div id="login">
          <form method="post" name="loginForm" onSubmit={this.submitloginForm}>
            <div className="button" />

            <input
              type="text"
              name="email"
              placeholder="enter email"
              value={this.state.fields.email}
              onChange={this.handleChange}
            />
            <div className="button" />

            <input
              type="password"
              name="password"
              placeholder="enter password"
              value={this.state.fields.password}
              onChange={this.handleChange}
            />
            <div className="button" />
            <input
              type="submit"
              className="button"
              value="click to complete Log In"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default LoginForm;
