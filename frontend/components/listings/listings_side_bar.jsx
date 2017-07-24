import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';


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
          <li key={idx}
            className="side-bar-item">
            <Link
              to={`/listings/${content.id}`}>
                <div className="side-bar-item-container">
                  <div
                    className="img"
                    style={this.getImage(content.picture)}>
                  </div>
                  <div className="side-bar-item-description">
                    <span className="side-bar-name">
                      {content.firstname + " " + content.lastname}
                    </span>
                    <span className="side-bar-info">
                      {content.languages.join(", ")}
                    </span>
                    <span className="side-bar-info">
                      {content.hosting? "Currently Hosting" : "Not Currently Hosting"}
                    </span>
                    <span className="side-bar-about">
                      {content.about}
                    </span>
                  </div>
                </div>

              </Link>
            </li>
        ))}
      </ul>
    );
  }
}

export default ListingsSideBar;
