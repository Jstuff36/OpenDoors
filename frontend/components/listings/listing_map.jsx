import React from 'react';
import ReactDOM from 'react-dom';
import { Link, withRouter } from 'react-router-dom';
import Map from './map';

class ListingMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listings: [],
    };
    this.handleClick = this.handleClick.bind(this);
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

  handleClick() {
    this.props.logout().then(
      () => this.props.history.push({
        pathname: `/login`
    }));
  }

  render() {
    const currentListing = this.props.currentListing;
    const mapCenter = { lat: 37.7758, lng: -122.435 };
    if (this.state.listings.length === 0) {
      return null;
    }
    return(
      <div>
        <Map
          logout={this.props.logout}
          center ={mapCenter}
          listings={this.state.listings}/>
        <button onClick={this.handleClick}>Logout</button>
        {currentListing ? currentListing.firstname : ""}
      </div>
    );
  }
}

export default ListingMap;
