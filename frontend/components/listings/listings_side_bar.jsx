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
                <div className="side-bar-item-main-container">
                  <div
                    className="img"
                    style={this.getImage(content.picture)}>
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
                    </div>
                  </div>
                  <span>
                    {content.about}
                  </span>
                </div>

              </Link>
            </li>
        ))}
      </ul>
    );
  }
}

export default ListingsSideBar;
