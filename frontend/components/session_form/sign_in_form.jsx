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
        <div className="form_container">

          <form
            onSubmit={this.handleSubmit}
            className="auth_form_sign_in">
            <div
              className="sign_in_title login_items">
              OpenDoors
            </div>
            <div className="errors">
              {this.props.errors}
            </div>
            <input
              className="login_items add_underline edit_placeholder"
              type="text"
              placeholder="Email"
              onChange={this.update('email')}
              onFocus={this.handleFocus}
              />
            <input
              className="login_items add_underline edit_placeholder"
              type="password"
              placeholder="Password"
              onChange={this.update('password')}
              onFocus={this.handleFocus}
              />
            <input
              className="login_items sign_in_up_button"
              type="submit"
              value="Log In" />
            <div className="link_to_sign_up_sign_in">
              Don't have an account?
              <Link to="/signup" className="login_items">
                Sign Up
              </Link>
            </div>
            <button
              className="login_items"
              onClick={this.handleSubmit}>
              Demo Login
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default SignInForm;
