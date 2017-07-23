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
              <span className="name">
                {content.firstname} {content.lastname}
              </span>
              <span>
                {content.languages.join(", ")}
              </span>
              <span>
                {content.hosting? "Currently Hosting" : "Not Currently Hosting"}
              </span>
              <span>
                {content.about}
              </span>
            </div>
          </li>
        ))}
      </ul>
    );
  }
}

export default ListingsSideBar;
