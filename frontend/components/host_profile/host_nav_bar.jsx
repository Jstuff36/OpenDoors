import React from 'react';

class HostNavBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout(e) {
    this.props.logout().then(
      () => this.props.history.push({
        pathname: `/login`
    }));
  }

  handleListing(e) {
    this.props.histroy.push({
      pathname: '/listings'
    });
  }

  render() {
    return(
      <div className="host-nav-container">
        <h2 className="site-name">
          OpenDoors
        </h2>
        <button className="host-nav-listings">
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

export default HostNavBar;
