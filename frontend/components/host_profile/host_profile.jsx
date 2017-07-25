import React from 'react';
import ReactDOM from 'react-dom';
import HostNavBar from './host_nav_bar';
import { withRouter } from 'react-router-dom';
import HostMap from './host_map';
import Modal from 'react-modal';
import BookingModal from './booking_modal';

class HostProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      action: {
        host_profile: true,
        host_references: false,
        host_location: false,
      },
      showModal: false,
      modalContent: [],
      currentListing: ""
    };
    this.handleSwitchDisplay = this.handleSwitchDisplay.bind(this);
    this.openModal = this.openModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  componentDidMount() {
    const id = parseInt(this.props.match.params.id);
    this.props.fetchSingleListing(id).then( (resp) => {
      this.setState({
        currentListing: resp.currentListing
      });
    });
  }

  handleSwitchDisplay(action) {
    return (e) => {
      let tempObj = {
        host_profile: false,
        host_references: false,
        host_location: false
      };
      tempObj[action] = true;
      this.setState({action: tempObj});
      e.preventDefault();

    };
  }

  handleOpenModal () {
    this.setState({
      showModal: true
    });
  }

  handleCloseModal () {
    this.setState({ showModal: false });
  }

  openModal() {
    this.handleOpenModal();
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

    if (this.state.action.host_profile) {

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
                <button
                  onClick={this.openModal}
                  className="request-booking">
                  Request to book
                </button>
                <Modal
                  showModal={this.state.showModal}
                  handleCloseModal={this.handleCloseModal}
                  isOpen={this.state.showModal}
                  className="booking-modal"
                  contentLabel="Booking request"
                  onRequestClose={this.handleCloseModal}
                  shouldCloseOnOverlayClick={true}
                  overlayClassName="booking-overlay">
                  <BookingModal />
                </Modal>

              </div>
              <div className="host-info-nav-container">
                <div className="current-page">About</div>
                <button
                  onClick={this.handleSwitchDisplay("host_references")}
                  className="host-links">
                  References
                </button>
                <button
                  onClick={this.handleSwitchDisplay("host_location")}
                  className="host-links">
                  Location
                </button>
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
    } else if (this.state.action.host_references) {
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
                <button
                  onClick={this.handleSwitchDisplay("host_profile")}
                  className="host-links">
                  About
                </button>
                <div className="current-page">References</div>
                <button
                  onClick={this.handleSwitchDisplay("host_location")}
                  className="host-links">
                  Location
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
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
                <button
                  onClick={this.handleSwitchDisplay("host_profile")}
                  className="host-links">
                  About
                </button>
                <button
                  onClick={this.handleSwitchDisplay("host_references")}
                  className="host-links">
                  References
                </button>
                <div className="current-page">Location</div>
              </div>
              <HostMap currentListing={this.state.currentListing}/>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default withRouter(HostProfile);
