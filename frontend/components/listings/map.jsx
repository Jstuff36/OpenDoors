import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import ListingsSideBar from './listings_side_bar';
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
  }

  componentDidMount() {
    const map = this.refs.map;
    const options = {
      center: this.props.center,
      zoom: 13
    };
    this.map = new google.maps.Map(map, options);
    this.listenForMove();
    this.props.listings.forEach(this.addMarker);
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
      let listingsInView = []
      this.props.listings.forEach( (listing) => {
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
      });
      this.setState({listingsInView: listingsInView});
    });
  }

  render () {
    return (
      <div>
        <Modal
          isOpen={this.state.showModal}
          contentLabel="Some text"
          className="Modal"
          overlayClassName="Overlay">
          <ul>
            <li>
              <img src={this.state.modalContent["picture"]}
                className="modal-image"
                />
              {this.state.modalContent["firstname"]}
              {this.state.modalContent["lastname"]}
              {this.state.modalContent["about"]}
            </li>
          </ul>
          <button  onClick={this.handleCloseModal}>Close Modal</button>
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
