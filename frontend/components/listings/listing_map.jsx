import React from 'react';
import ReactDOM from 'react-dom';
import { Link, withRouter } from 'react-router-dom';
import TestMap from './map';

class ListingMap extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.logout().then(
      () => this.props.history.push({
        pathname: `/login`
    }));
  }

  render() {
    const currentListing = this.props.currentListing;
    const mapCenter = { lat: 37.7758, lng: -122.435 };

    return(
      <div>
        <TestMap center ={mapCenter} />
        <button onClick={this.handleClick}>Logout</button>
        {currentListing ? currentListing.firstname : ""}
      </div>
    );
  }
}

export default ListingMap;
