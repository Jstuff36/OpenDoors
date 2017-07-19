import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SignInForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: 'Email',
      password: 'Password'
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.login(user);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleFocus(e) {
    e.target.select();
  }

  render() {
    return (
      <div>
        {this.props.errors}
        <form onSubmit={this.handleSubmit}>
          <div>
            OpenDoors
          </div>
          <input type="text"
            placeholder="Email"
            onChange={this.update('email')}
            onFocus={this.handleFocus}
          />
        <input type="password"
          placeholder="Password"
          onChange={this.update('password')}
          onFocus={this.handleFocus}
        />
      <input type="submit" value="Sign In" />
        </form>
      </div>
    );
  }
}

export default SignInForm;
