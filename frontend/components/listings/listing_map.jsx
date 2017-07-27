import React from 'react';
import ReactDOM from 'react-dom';
import { Link, withRouter } from 'react-router-dom';
import Map from './map';
import ListingsNavBar from './listings_nav_bar';
import ListingNavBarNotLoggedIn from './listings_nav_bar_not_logged_in';

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
      let allListings = this.props.listings;
      let keys = Object.keys(allListings);
      let currentUser = this.props.currentUser;
      for (let i = 0; i <= keys.length -1; i++) {
        if (allListings[keys[i]].id === currentUser.id) {
          delete allListings[keys[i]];
        }
      }
      this.setState({
        listings: allListings,
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
        { this.props.currentUser ?
        <ListingsNavBar
          currentUserID={this.props.currentUser.id}
          receiveCity={this.props.receiveCity}
          history={this.props.history}
          logout={this.props.logout}/> :
        <ListingNavBarNotLoggedIn
          receiveCity={this.props.receiveCity}
          history={this.props.history}/>
        }
        <Map
          currentUser={this.props.currentUser}
          logout={this.props.logout}
          center={mapCenter}
          listings={this.state.listings}/>
      </div>
    );
  }
}

export default ListingMap;
