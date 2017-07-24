import React from 'react';
import ReactDOM from 'react-dom';
import { HostNavBar } from './host-nav-bar';

class HostProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentListing: ""
    };
  }

  componentDidMount() {
    const id = parseInt(this.props.match.params.id);
    this.props.fetchSingleListing(id).then( (resp) => {
      this.setState({
        currentListing: resp.currentListing
      });
    });
  }

  getImage(imageUrl) {
    return { backgroundImage: `url(${imageUrl})` };
  }

  render() {
    const {
      firstname,
      lastname,
      city,
      about,
      hosting,
      languages,
      country,
      picture
    } = this.state.currentListing;
    return(
      <div>
        <HostNavBar />
        <div className="host-container">
          <div className="host-side-bar-container">
            <div
              className="host-img"
              style={this.getImage(picture)}>
            </div>
            <div>{firstname} {lastname}</div>
            <div>{city}</div>
          </div>
          <div className="host-info-container">
            <div className="hosting-info-container">
              <div>{hosting ? "Currently Hosting" : "Not Currently Hosting"}</div>
              <div>Request to book</div>
            </div>
            <div className="host-info-nav-container">
              <div>About</div>
              <div>References</div>
              <div>Location</div>
            </div>
            <div className="host-personal-info-container">
              <div className="host-personal-info-item">{languages}</div>
              <div className="host-personal-info-item">Join Date</div>
              <div className="host-personal-info-item">Age/sex</div>
              <div className="host-personal-info-item">{country}</div>
              <div className="host-personal-info-item">occupation</div>
              <div className="host-personal-info-item">refrences</div>
            </div>
            <div className="host-detail-info-container">
              <div>About me...</div>
              <div>{about}</div>
              <div>Interest...</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HostProfile;
