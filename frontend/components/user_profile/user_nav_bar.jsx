import React from 'react';

class UserNavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="host-nav-container">
        <h2 className="site-name">
          OpenDoors
        </h2>
        <button
          className="host-nav-listings"
          onClick={this.handleListing}>
          Listings
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

export default UserNavBar;
