import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

class ListingsNavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUserID: this.props.currentUserID,
      city: "San Francisco"
    };
    this.handleCityClick = this.handleCityClick.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleCityClick(e) {
    this.setState({
      city: $(e.target).text()
    });
    this.props.receiveCity($(e.target).text());
  }

  handleLogout(e) {
    this.props.logout().then(
      () => this.props.history.push({
        pathname: `/login`
    }));
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
        <Link to={`/user/${this.state.currentUserID}`}>
          <div className="nav-icons">
            My Profile
          </div>
        </Link>
        <Link to={`/user/${this.state.currentUserID}`}>
          <div className="nav-icons">
            My Bookings
          </div>
        </Link>
        <div
          className="nav-icons"
          onClick={this.handleLogout}>
          Log Out
        </div>
      </div>
    );
  }
}

export default ListingsNavBar;
