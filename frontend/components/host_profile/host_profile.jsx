import React from 'react';
import ReactDOM from 'react-dom';
import HostNavBar from './host_nav_bar';

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
      interest,
      picture,
      occupation,
      age_sex
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
            <div className="host-name">
              {firstname} {lastname}</div>
            <div className="host-city">
              {city}</div>
          </div>
          <div className="host-info-container">
            <div className="hosting-info-container">
              <div className="currently-hosting">
                {hosting ? "Currently hosting" : "Not hosting"}
              </div>
              <div className="request-booking">Request to book</div>
            </div>
            <div className="host-info-nav-container">
              <button>About</button>
              <button>References</button>
              <button>Location</button>
            </div>
            <div className="host-personal-info-container">
              <div className="host-personal-info-item">
                {age_sex ? age_sex : "Age/Sex"}
              </div>
              <div className="host-personal-info-item">Join Date</div>
              <div className="host-personal-info-item">Fluent in {languages}</div>
              <div className="host-personal-info-item">{country}</div>
              <div className="host-personal-info-item">
                {occupation ? occupation: "No occupation listed"}
              </div>
            </div>
            <div className="host-detail-info-container">
              <div className="about-title">About me</div>
              <div className="about-text">
                {about ? about : "No about listed"}
              </div>
              <div className="about-title">Interest</div>
              <div className="about-text">
                {interest ? interest : "No interest listed"}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HostProfile;
