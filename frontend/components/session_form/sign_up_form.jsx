import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import SignUpFormNext from './sign_up_form_next';

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      password1: "",
      password2: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let blankValues = [];
    Object.keys(this.state).forEach( (key) => {
      if (!this.state[key]) {
        blankValues.push(key);
      }
    });
    if (blankValues.length > 0) {
      blankValues.forEach( (field) => {
        let message = `${field} can't be blank!`;
        this.props.errors.push(message);
        debugger
      }).bind(this);
    } else {
      return(
        <SignUpFormNext
          signup={this.props.signup}
          form1values={this.state}
          />
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
            onChange={this.update('password1')}
            onFocus={this.handleFocus}
            />
          <input type="password"
            placeholder="Password"
            onChange={this.update('password2')}
            onFocus={this.handleFocus}
            />
          <input type="submit" value="Next"/>
        </form>
      </div>
    );
  }
}
export default SignUpForm;
