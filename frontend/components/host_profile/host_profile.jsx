import React from 'react';
import ReactDOM from 'react-dom';
import HostNavBar from './host_nav_bar';
import { withRouter } from 'react-router-dom';

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
      age_sex,
      join_date
    } = this.state.currentListing;
    return(
      <div>
        <HostNavBar
          logout={this.props.logout}
          history={this.props.history}/>
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
              <div className="current-page">About</div>
              <button className="host-links">References</button>
              <button className="host-links">Location</button>
            </div>
            <div className="host-personal-info-container">
              <div className="host-personal-info-item">
                Age/Sex: {age_sex ? age_sex : "Age/Sex Not listed"}
              </div>
              <div className="host-personal-info-item">
                Join Date: {join_date ? join_date: "Join date not available"}
              </div>
              <div className="host-personal-info-item">
                Langauges: {languages ? "Fluent in " + languages : "Langauges no listed"}
              </div>
              <div className="host-personal-info-item">Country: {country}</div>
              <div className="host-personal-info-item">
                Occupation: {occupation ? occupation: "No occupation listed"}
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

export default withRouter(HostProfile);
