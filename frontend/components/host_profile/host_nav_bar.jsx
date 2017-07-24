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

  render() {
    return(
      <div className="host-nav-container">
        <h2 className="site-name">
          OpenDoors
        </h2>
        <div className="nav-dropdown-icon">
          <button
            className="nav-dropbtn-icon">
            <div className="nav-menu-icon"></div>
            <div className="nav-menu-icon"></div>
            <div className="nav-menu-icon"></div>
          </button>
          <div className="nav-dropdown-content">
            <span>
              Listings
            </span>
            <span onClick={this.handleLogout}>Log Out</span>
          </div>
        </div>
      </div>
    );
  }
}

export default HostNavBar;
