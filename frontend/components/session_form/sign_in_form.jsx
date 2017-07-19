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
    this.demoLogin = this.demoLogin.bind(this);
  }

  demoLogin(e) {
    e.preventDefault();
    const user = {
      email: "a",
      password: "password"
    };
    this.props.login(user).then(
      () => this.props.history.push({
        pathname: `/listings`
      })
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.login(user).then(
      () => this.props.history.push({
        pathname: `/listings`
      })
    );
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
        <Link to="/signup">
          <div>
            Sign Up
          </div>
        </Link>
        <button onClick={this.demoLogin}>Demo Login</button>
      </div>
    );
  }
}

export default SignInForm;
