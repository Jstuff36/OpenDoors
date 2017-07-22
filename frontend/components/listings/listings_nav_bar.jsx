import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';

class ListingsNavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "San Francisco"
    };
    this.handleCityClick = this.handleCityClick.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleCityClick(e) {
    this.setState({
      city: $(e.target).text()
    });
  }

  handleLogout(e) {
    this.props.logout().then(
      () => this.props.history.push({
        pathname: `/login`
    }));
  }

  render() {
    return (
      <div>
        <h1>Find A Host in {this.state.city}</h1>
        <div className="dropdown">
          <button
            className="dropbtn">
            Dropdown
          </button>
          <div className="dropdown-content">
            <span onClick={this.handleCityClick}>San Francisco</span>
            <span onClick={this.handleCityClick}>CasaBlanca</span>
          </div>
        </div>
        <div className="dropdown">
          <button
            className="dropbtn">
            Dropdown
          </button>
          <div className="dropdown-content">
            <a href="#">My Profile</a>
            <a href="#">My Bookings</a>
            <span onClick={this.handleLogout}>Log Out</span>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(ListingsNavBar);
