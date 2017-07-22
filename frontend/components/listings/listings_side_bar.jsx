import React from 'react';
import ReactDOM from 'react-dom';

class ListingsSideBar extends React.Component {
  constructor(props) {
    super(props);
  }

  getImage(imageUrl) {
    return { backgroundImage: `url(${imageUrl})` };
  }

  render() {
    return(
      <ul className="listings-side-bar">
        {this.props.listingsInView.map( (content, idx) => (
          <li
            className="side-bar-item"
            key={idx}>
            <div>
              <div
                className="img"
                style={this.getImage(content.picture)}>
              </div>
            </div>
            <div className="side-bar-item-description">
              <h3>
                {content.firstname} {content.lastname}
              </h3>
              <h3>
                {content.about}
              </h3>
            </div>
          </li>
        ))}
      </ul>
    );
  }
}

export default ListingsSideBar;
