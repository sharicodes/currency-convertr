import React, { Component } from "react";

class SignUpForm extends Component {
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

  submituserRegistrationForm = e => {
    e.preventDefault();

    let fields = {};
    fields["first_name"] = "";
    fields["last_name"] = "";
    fields["email"] = "";
    fields["password"] = "";
    this.setState({ fields: fields });
    alert("Form submitted");
  };

  render() {
    return (
      <div id="signup form">
        <div id="register">
          <form
            method="post"
            name="userRegistrationForm"
            onSubmit={this.submituserRegistrationForm}
          >
            <input
              type="text"
              placeholder="enter your first name"
              name="first_name"
              value={this.state.fields.first_name}
              onChange={this.handleChange}
            />
            <div className="button" />

            <input
              type="text"
              placeholder="enter your last name"
              name="last_name"
              value={this.state.fields.last_name}
              onChange={this.handleChange}
            />
            <div className="button" />

            <input
              type="text"
              placeholder="enter your email"
              name="email"
              value={this.state.fields.email}
              onChange={this.handleChange}
            />
            <div className="button" />

            <input
              type="password"
              placeholder="enter a password"
              name="password"
              value={this.state.fields.password}
              onChange={this.handleChange}
            />
            <div className="button" />
            <input
              type="submit"
              className="button"
              value="click to complete Sign Up"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default SignUpForm;
