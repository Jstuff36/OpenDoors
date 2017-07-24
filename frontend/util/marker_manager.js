/* global google:false */

class MarkerManager {
  constructor(map, handleClick){
    this.map = map;
    this.handleClick = handleClick;
    this.markers = {};
  }

  updateMarkers(listings) {
    const listingsObj = {};
    listings.forEach(listing => listingsObj[listing.id] = listing);
    listings.forEach(newListing => this.addMarker(newListing));

    Object.keys(this.markers).forEach((id) => this.removeMarker(this.markers[id]));
  }

  addMarker(listing) {
    const pos = new google.maps.LatLng(listing.location[0], listing.location[1]);
    const marker = new google.maps.Marker({
      position: pos,
      map: this.map,
      id: listing.id
    });

    marker.addListener('click', () => {
      this.handleClick(listing);
    });

    this.markers[marker.id] = marker;
  }

  removeMarker(marker) {
    this.markers[marker.id].setMap(null);
    delete this.markers[marker.id];
  }
}

export default MarkerManager;
