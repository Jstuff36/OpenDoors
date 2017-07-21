import React from 'react';
import ReactDOM from 'react-dom';

class TestMap extends React.Component {

  constructor(props) {
    super(props);
    this.addMarker = this.addMarker.bind(this);
  }

  componentDidMount() {
    const map = this.refs.map;
    console.log("hi");
    const options = {
      center: this.props.center,
      zoom: 13
    };
    const testMarker = { lat: 38, lng: -122 };
    this.map = new google.maps.Map(map, options);
    this.listenForMove();
    this.addMarker(testMarker);
  }

  addMarker(coordinates) {
    const pos = new google.maps.LatLng(coordinates.lat, coordinates.lng);
    const marker = new google.maps.Marker({
      position: pos,
      map: this.map
    });

    marker.addListener('click', () => {
      alert('click');
    });
  }


  listenForMove() {
    google.maps.event.addListener(this.map, 'idle', () => {
      const bounds = this.map.getBounds();
      alert('map has moved, check console to see updated bounds');
      console.log('center',
        bounds.getCenter().lat(),
        bounds.getCenter().lng());
      console.log("north east",
        bounds.getNorthEast().lat(),
        bounds.getNorthEast().lng());
      console.log("south west",
        bounds.getSouthWest().lat(),
        bounds.getSouthWest().lng());

    });
  }

  render () {
    return (
      <div>
        <div id='map' ref='map'></div>
      </div>
    );
  }


}
export default TestMap;
