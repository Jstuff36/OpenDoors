import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'Username',
      password: 'Password'
    };
  }

  render() {
    return (
      <div>
        <form>
          <div>
            OpenDoors
          </div>
          <input type="text"
            value={this.state.username}
            onChange={this.update('username')}
          />
        <input type="password"
          value={this.state.password}
          onChange={this.update('password')}
        </form>
      </div>
    );
  }
}
