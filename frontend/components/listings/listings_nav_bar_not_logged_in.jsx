import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

class ListingsNavBarNotLoggedIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUserID: this.props.currentUserID,
      city: this.props.currentCity || "San Francisco"
    };
    this.handleCityClick = this.handleCityClick.bind(this);
  }

  handleCityClick(e) {
    this.setState({
      city: $(e.target).text()
    });
    this.props.receiveCity($(e.target).text());
  }

  render() {
    return (
      <div className="listing-nav-bar-container">
        <h2 className="site-name">OpenDoors</h2>
        <h2>Find a Host in {this.state.city}</h2>
        <div className="dropdown-location">
          <div
            className="dropbtn-location">
            Location
          </div>
          <div className="dropdown-content">
            <span onClick={this.handleCityClick}>San Francisco</span>
            <span onClick={this.handleCityClick}>Casablanca</span>
          </div>
        </div>
        <Link to={`/signup`}>
          <div className="nav-icons">
            Sign Up
          </div>
        </Link>
        <Link to={`/login`}>
          <div className="nav-icons">
            Log In
          </div>
        </Link>
      </div>
    );
  }
}

export default ListingsNavBarNotLoggedIn;
