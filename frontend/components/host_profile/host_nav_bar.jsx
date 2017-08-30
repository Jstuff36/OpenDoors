import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

class HostNavBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
    this.handleListing = this.handleListing.bind(this);
    this.handleProfile = this.handleProfile.bind(this);
  }

  handleLogout(e) {
    this.props.logout().then(
      () => this.props.history.push({
        pathname: `/login`
    }));
  }

  handleListing(e) {
    this.props.history.push({
      pathname: '/'
    });
  }

  handleProfile(e) {
    console.log(this.props.currentUser.id);
    let id = this.props.currentUser.id;
    this.props.history.push({
      pathname: `/user/${id}`
    });
  }

  render() {
    return(
      <div className="host-nav-container">
        <h2 className="site-name">
          <Link to={'/'}>
            OpenDoors
          </Link>
        </h2>
        <button
          className="host-nav-listings"
          onClick={this.handleListing}>
          Listings
        </button>
        <button
          className="host-nav-listings"
          onClick={this.handleProfile}>
          My Profile
        </button>
        <button
          className="host-nav-log-out"
          onClick={this.handleLogout}>
          Log Out
        </button>
      </div>
    );
  }
}

export default withRouter(HostNavBar);
