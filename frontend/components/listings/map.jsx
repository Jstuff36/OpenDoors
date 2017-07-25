import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import ListingsSideBar from './listings_side_bar';
import { Link } from 'react-router-dom';

class Map extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      modalContent: [],
      listingsInView: []
    };
    this.addMarker = this.addMarker.bind(this);
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.listenForMove = this.listenForMove.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.center.lat !== nextProps.center.lat &&
      this.props.center.lng !== nextProps.center.lng) {
        this.map.setCenter(new google.maps.LatLng(nextProps.center.lat, nextProps.center.lng));
      }
  }

  componentDidUpdate(prevProps, prevState) {
    Object.keys(this.props.listings).forEach(
      key => this.addMarker(this.props.listings[key]));
  }

  componentDidMount() {
    const map = this.refs.map;
    const options = {
      center: this.props.center,
      zoom: 13,
      styles: [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#ebe3cd"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#523735"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#f5f1e6"
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#c9b2a6"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#dcd2be"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#ae9e90"
      }
    ]
  },
  {
    "featureType": "landscape.natural",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#93817c"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#a5b076"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#447530"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f5f1e6"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#fdfcf8"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f8c967"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#e9bc62"
      }
    ]
  },
  {
    "featureType": "road.highway.controlled_access",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e98d58"
      }
    ]
  },
  {
    "featureType": "road.highway.controlled_access",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#db8555"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#806b63"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#8f7d77"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#ebe3cd"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#b9d3c2"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#92998d"
      }
    ]
  }
]
    };
    this.map = new google.maps.Map(map, options);
    this.listenForMove();
    let keys = Object.keys(this.props.listings);
    for (let i = 0; i <= keys.length - 1; i++) {
      this.addMarker(this.props.listings[keys[i]]);
    }
  }

  addMarker(listing) {
    const pos = new google.maps.LatLng(listing.location[0], listing.location[1]);
    const marker = new google.maps.Marker({
      position: pos,
      map: this.map
    });

    marker.addListener('click', () => {
      this.handleOpenModal(listing);
    });
  }

  handleOpenModal (content) {
    this.setState({
      showModal: true,
      modalContent: content
    });
  }

  handleCloseModal () {
    this.setState({ showModal: false });
  }

  listenForMove() {
    google.maps.event.addListener(this.map, 'idle', () => {
      const bounds = this.map.getBounds();
      let listingsInView = [];
      let keys = Object.keys(this.props.listings);
      for (let i = 0; i <= keys.length - 1; i++) {
        let listing = this.props.listings[keys[i]];
        let listingLat = listing.location[0];
        let listingLong = listing.location[1];
        let mapLatLower = bounds.f.b;
        let mapLatUpper = bounds.f.f;
        let mapLongLower = bounds.b.b;
        let mapLongUpper = bounds.b.f;
        if (listingLat > mapLatLower &&
          listingLat < mapLatUpper &&
          listingLong > mapLongLower &&
          listingLong < mapLongUpper
        ) {
          listingsInView.push(listing);
        }
      }
      this.setState({listingsInView: listingsInView});
    });
  }

  getImage(imageUrl) {
    return { backgroundImage: `url(${imageUrl})` };
  }

  render () {
    return (
      <div>
        <Modal
          isOpen={this.state.showModal}
          className="Modal"
          contentLabel="User profile"
          onRequestClose={this.handleCloseModal}
          shouldCloseOnOverlayClick={true}
          overlayClassName="Overlay">
          <ul className="modal-ul-container">
            <button
              className="modal-button"
              onClick={this.handleCloseModal}>
              x</button>
            <Link
              to={`/listings/${this.state.modalContent["id"]}`}>
              <div className="modal-container">

            <li>
              <div
                className="modal-image"
                style={this.getImage(this.state.modalContent["picture"])}>
              </div>
            </li>
            <li className="modal-name">
              {this.state.modalContent["firstname"]} {this.state.modalContent["lastname"]}
            </li>
            <li className="modal-about">
              {this.state.modalContent["about"]}
            </li>
          </div>
          </Link>
          </ul>
        </Modal>
        <div className="map-side-bar-container">
          <ListingsSideBar
            listingsInView={this.state.listingsInView}/>
          <div id='map' ref='map'>
          </div>
        </div>
      </div>
    );
  }


}
export default Map;
