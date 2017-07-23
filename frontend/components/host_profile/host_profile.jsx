import React from 'react';
import ReactDOM from 'react-dom';

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
      <div className="host-container">
        <div className="host-side-bar-container">
          <div>{firstname} {lastname}</div>
          <div>{city}</div>
        </div>
        <div className="host-info-container">
          <div className="hosting-info-container">
            <div>{hosting ? "Currently Hosting" : "Not Currently Hosting"}</div>
          </div>
          <div className="host-info-nav-container">
            <div>About</div>
            <div>References</div>
            <div>Location</div>
          </div>
          <div className="host-personal-info-container">
            <div>{languages}</div>
            <div>Join Date</div>
            <div>Age/sex</div>
            <div>{country}</div>
            <div>occupation</div>
            <div>refrences</div>
          </div>
          <div className="host-detail-info-container">
            <div>About me...</div>
            <div>Interest...</div>
          </div>
        </div>
      </div>
    );
  }
}

export default HostProfile;
