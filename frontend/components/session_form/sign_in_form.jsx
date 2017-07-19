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

  componentWillUnmount() {
    this.props.clearErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    let user;
    if (e.currentTarget.innerHTML === "Demo Login") {
      user = {
        email: "a",
        password: "password"
      };
    } else {
    user = this.state;
    }
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
      <div className="main-background">
        {this.props.errors}
        <form
          onSubmit={this.handleSubmit}
          className="form_container">
          <div
            className="login_title login_items">
            OpenDoors
          </div>
          <input
            className="login_items add_underline"
            type="text"
            placeholder="Email"
            onChange={this.update('email')}
            onFocus={this.handleFocus}
            />
          <input
            className="login_items add_underline"
            type="password"
            placeholder="Password"
            onChange={this.update('password')}
            onFocus={this.handleFocus}
            />
          <input
            className="login_items login_button"
            type="submit"
            value="Log In" />
          <Link to="/signup" className="login_items">
            Sign Up
          </Link>
          <button
            className="login_items"
            onClick={this.handleSubmit}>
              Demo Login
          </button>
        </form>
      </div>
    );
  }
}

export default SignInForm;
