import React from 'react';
import ReactDOM from 'react-dom';
import { Link, withRouter } from 'react-router-dom';
import Map from './map';
import ListingsNavBar from './listings_nav_bar';

const CITY_CENTERS = {
  "San Francisco": { lat: 37.7758, lng: -122.435 },
  "Casablanca": { lat: 33.5731, lng: -7.5898}
};

class ListingMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listings: [],
    };
  }

  componentDidMount() {
    this.props.allListings(this.props.currentCity).then( () => {
      let listings = [];
      this.props.listings.forEach( el => {
        listings.push(el);
      });
      this.setState({
        listings: listings,
      });
    });
  }

  render() {
    const currentListing = this.props.currentListing;
    const mapCenter = CITY_CENTERS[this.props.currentCity];
    if (this.state.listings.length === 0) {
      return null;
    }
    return(
      <div className="listings-main-div">
        <ListingsNavBar
          receiveCity={this.props.receiveCity}
          logout={this.props.logout}/>
        <Map
          logout={this.props.logout}
          center ={mapCenter}
          listings={this.state.listings}/>
      </div>
    );
  }
}

export default ListingMap;
