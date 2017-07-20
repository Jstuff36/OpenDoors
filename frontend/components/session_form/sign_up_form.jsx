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

  componentWillUnmount() {
    this.props.clearErrors();
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
      <div className="main-background">
        <form
          className="auth_form_sign_up"
          onSubmit={this.handleSubmit}>
          <div className="sign_up_title">
            OpenDoors
          </div>
          <ul className="errors_container">
            {this.props.errors.map( (error, idx) => (
              <li key={idx}
                className="errors_sign_up">
                {error}
              </li>
            ))}
          </ul>
          <br/>
          <input
            className="add_underline edit_placeholder"
            type="text"
            placeholder="First Name"
            onChange={this.update('firstname')}
            onFocus={this.handleFocus}
            />
          <input
            className="add_underline edit_placeholder"
            type="text"
            placeholder="Last Name"
            onChange={this.update('lastname')}
            onFocus={this.handleFocus}
            />
          <input
            className="add_underline edit_placeholder"
            type="text"
            placeholder="Email"
            onChange={this.update('email')}
            onFocus={this.handleFocus}
            />
          <input
            className="add_underline edit_placeholder"
            type="password"
            placeholder="Password"
            onChange={this.update('password')}
            onFocus={this.handleFocus}
            />
          <input
            className="add_underline edit_placeholder"
            type="password"
            placeholder="Password"
            onChange={this.update('password2')}
            onFocus={this.handleFocus}
            />
          <input
            className="add_underline edit_placeholder"
            type="text"
            placeholder="City"
            onChange={this.update('city')}
            onFocus={this.handleFocus}
            />
          <input
            className="add_underline edit_placeholder"
            type="text"
            placeholder="Country"
            onChange={this.update('country')}
            onFocus={this.handleFocus}
            />
          <div className="hosting">
            <div>
              Hosting
            </div>
            <select
              className="soflow soflow-color"
              name="hosting"
              onChange={this.handleSelect}>
              Hosting
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
          <input
            className="sign_in_up_button"
            type="submit"
            value="Sign Up"/>
          <div className="link_to_sign_up_sign_in">
            Already have an account?
            <Link to="/login" className="login_items">
              Login
            </Link>
          </div>
        </form>
      </div>
    );
  }
}
export default SignUpForm;
