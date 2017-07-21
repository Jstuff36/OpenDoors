import React from 'react';
import ReactDOM from 'react-dom';

class ListingsSideBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <ul>
          {this.props.listingsInView.map( (content, idx) => (
            <li key={idx}>
              <img src={content.picture} className="side-bar-image"></img>
              {content.firstname}
              {content.lastname}
              {content.about}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ListingsSideBar;
