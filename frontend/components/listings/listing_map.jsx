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
    this.fetchAllListings = this.fetchAllListings.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentCity !== this.props.currentCity) {
      this.fetchAllListings(nextProps.currentCity);
    }
  }

  componentDidMount() {
    this.fetchAllListings(this.props.currentCity);
  }

  fetchAllListings(city) {
    this.props.allListings(city).then( () => {
      this.setState({
        listings: this.props.listings,
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
          history={this.props.history}
          logout={this.props.logout}/>
        <Map
          logout={this.props.logout}
          center={mapCenter}
          listings={this.state.listings}/>
      </div>
    );
  }
}

export default ListingMap;
