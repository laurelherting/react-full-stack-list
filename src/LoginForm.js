import React, { Component } from 'react';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  handleEmailChange(e) {
    this.setState({ email: e.target.value });
  }

  handlePasswordChange(e) {
    this.setState({ password: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const email = this.state.email.trim();
    const password = this.state.password.trim();

  }

  render() {
    return (
      <section id="loginBox">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label>
            <input type="text"
               value={this.state.email}
               placeholder="Email"
               onChange={this.handleEmailChange.bind(this)} />
          </label>
          <label>
            <input type="password"
               value={this.state.password}
               placeholder="Password"
               onChange={this.handlePasswordChange.bind(this)} />
            <input type="submit" value="Log In"/>
          </label>
        </form>
      </section>
    );
  }
}

export default LoginForm;
