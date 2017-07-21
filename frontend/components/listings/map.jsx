import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

class TestMap extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showModal: false
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

  handleOpenModal () {
    this.setState({ showModal: true });
  }

  handleCloseModal () {
    this.setState({ showModal: false });
  }

  addMarker(coordinates) {
    console.log(coordinates);
    const pos = new google.maps.LatLng(coordinates[0], coordinates[1]);
    const marker = new google.maps.Marker({
      position: pos,
      map: this.map
    });

    marker.addListener('click', () => {
      this.handleOpenModal();
    });
  }


  listenForMove() {
    google.maps.event.addListener(this.map, 'idle', () => {
      const bounds = this.map.getBounds();
    });
  }

  render () {

    return (
      <div>
        <div id='map' ref='map'></div>
        <Modal
          isOpen={this.state.showModal}
          contentLabel="Some text"
          className="Modal"
          overlayClassName="Overlay">
          <button  onClick={this.handleCloseModal}>Close Modal</button>
        </Modal>
      </div>
    );
  }


}
export default TestMap;
