import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class ListingMap extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.test = this.props.singleListing(5);
  }

  handleClick() {
    this.props.logout().then(
      () => this.props.history.push({
        pathname: `/login`
    }));
  }

  render() {
    const currentListing = this.props.currentListing;
    debugger;
    return(
      <div>
        <button onClick={this.handleClick}>Logout</button>
        {currentListing ? currentListing.firstname : ""}
      </div>
    );
  }
}

export default ListingMap;
