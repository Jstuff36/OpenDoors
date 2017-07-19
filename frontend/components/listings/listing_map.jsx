import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class ListingMap extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.logout().then( () => this.props.history.push({
      pathname: `/login`
    }));
  }

  render() {
    return(
      <button onClick={this.handleClick}>Logout</button>
    );
  }
}

export default ListingMap;
