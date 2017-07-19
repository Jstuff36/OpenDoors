import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      password2: "",
      location: "",
      city: "",
      country: "",
      hosting: true
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSelect(e) {
    e.preventDefault();
    if (e.currentTarget.value === "No") {
      this.setState({hosting: false});
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.password !== this.state.password2) {
      this.props.custom_error("Passwords don't match!");
    } else {
      const user = this.state;
      user["location"] = [user["location"]];
      this.props.signup(user).then(
        () => this.props.history.push({
          pathname: `/listings`
        })
      );
    }
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
            <input type="text"
              placeholder="First Name"
              onChange={this.update('firstname')}
              onFocus={this.handleFocus}
              />
            <input type="text"
              placeholder="Last Name"
              onChange={this.update('lastname')}
              onFocus={this.handleFocus}
              />
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
            <input type="password"
              placeholder="Password"
              onChange={this.update('password2')}
              onFocus={this.handleFocus}
              />
          </div>
          <div>
            <input type="text"
              placeholder="Location"
              onChange={this.update('location')}
              onFocus={this.handleFocus}
              />
            <input type="text"
              placeholder="City"
              onChange={this.update('city')}
              onFocus={this.handleFocus}
              />
            <input type="text"
              placeholder="Country"
              onChange={this.update('country')}
              onFocus={this.handleFocus}
              />
            <select
              name="hosting"
              onChange={this.handleSelect}
              >
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
          <input type="submit" value="Sign Up"/>
        </form>
        <Link to="/login">
        <div>
          Login
        </div>
      </Link>
      </div>
    );
  }
}
export default SignUpForm;
