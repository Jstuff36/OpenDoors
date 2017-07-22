import React from 'react';
import ReactDOM from 'react-dom';
import { Link, withRouter } from 'react-router-dom';
import Map from './map';
import ListingsNavBar from './listings_nav_bar';

class ListingMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listings: [],
    };
  }

  componentDidMount() {
    this.props.allListings("San Francisco").then( () => {
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
    const mapCenter = { lat: 37.7758, lng: -122.435 };
    if (this.state.listings.length === 0) {
      return null;
    }
    return(
      <div className="listings-main-div">
        <ListingsNavBar
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
