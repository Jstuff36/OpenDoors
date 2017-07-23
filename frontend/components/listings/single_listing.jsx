import React from 'react';
import ReactDOM from 'react-dom';

class SingleListing extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const id = this.props.match.id;
  }


  render() {
    debugger;
    return(
      <h1>{this.props.currentListing.firstname}</h1>
    );
  }
}

export default SingleListing;
