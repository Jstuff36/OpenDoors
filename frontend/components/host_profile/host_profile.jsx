import React from 'react';
import ReactDOM from 'react-dom';
import HostNavBar from './host_nav_bar';
import { withRouter } from 'react-router-dom';
import HostMap from './host_map';
import Modal from 'react-modal';
import BookingModal from './booking_modal';
import NewReferenceModal from './new_reference_modal';
import merge from 'lodash/merge';
import { Link } from 'react-router-dom';

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
      showModalRef: false,
      modalContent: [],
      currentListing: "",
      hostReferences: "",
      bookingStatus: "Request to book",
      currentUser: this.props.currentUser,
      modalState: {
        startDate: "",
        endStart: "",
        body: ""
      },
      referenceState: {
        comment: ""
      }
    };
    this.handleSwitchDisplay = this.handleSwitchDisplay.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateStartDate = this.updateStartDate.bind(this);
    this.updateEndDate = this.updateEndDate.bind(this);
    this.updateBody = this.updateBody.bind(this);
    this.updateComment = this.updateComment.bind(this);
    this.handleNewReference = this.handleNewReference.bind(this);
  }

  componentDidMount() {
    const id = parseInt(this.props.match.params.id);
    this.props.fetchSingleListing(id).then( (resp) => {
      this.setState({
        currentListing: resp.currentListing
      });
    });
    this.props.fetchAllReferences(id).then( (resp) => {
      this.setState({
        hostReferences: resp.references
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
      this.setState({ action: tempObj });
      e.preventDefault();

    };
  }

  updateComment() {
    return e => {
      const newState = merge({}, this.state);
      newState.referenceState.comment = e.currentTarget.value;
      this.setState(newState);
    };
  }

  updateStartDate() {
    return e => {
      const newState = merge({}, this.state);
      newState.modalState.startDate = e.currentTarget.value;
      this.setState(newState);
    };
  }

  updateEndDate() {
    return e => {
      const newState = merge({}, this.state);
      newState.modalState.endDate = e.currentTarget.value;
      this.setState(newState);
    };
  }

  updateBody() {
    return e => {
      const newState = merge({}, this.state);
      newState.modalState.body = e.currentTarget.value;
      this.setState(newState);
    };
  }

  handleNewReference(e) {
    e.preventDefault();
    const id = parseInt(this.props.match.params.id);
    const refState = this.state.referenceState;
    const reference = merge(
      { comment: refState.comment },
      { user_id: this.state.currentUser.id },
      { host_id: this.state.currentListing.id }
    );
    this.props.createNewReference(reference).then( () => {
      this.handleCloseModal(true);
      this.props.fetchAllReferences(id).then( (resp) => {
        this.setState({
          hostReferences: resp.references
        });
      });
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const modalState = this.state.modalState;
    const trip = merge(
      { dates: [modalState.startDate, modalState.endDate] },
      { message: modalState.body },
      { user_id: this.state.currentUser.id },
      { host_id: this.state.currentListing.id },
      { status: "Pending" }
    );
    this.props.newTrip(trip).then( () => {
      this.handleCloseModal(),
      this.setState({
        bookingStatus: "Request Sent!"
      });
    });
  }


  handleCloseModal(flag) {
    return (e) => {
      if (flag) {
        this.setState({ showModalRef: false });
      } else {
        this.setState({ showModal: false });
      }
    };
  }

  handleOpenModal(flag) {
    return (event) => {
      if (flag) {
        this.setState({ showModalRef: true});
      } else {
        this.setState({ showModal: true });
      }
    };
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
                  onClick={this.handleOpenModal(false)}
                  className="request-booking">
                  {this.state.bookingStatus}
                </button>
                <Modal
                  showModal={this.state.showModal}
                  handleCloseModal={this.handleCloseModal(false)}
                  isOpen={this.state.showModal}
                  className="booking-modal"
                  contentLabel="Booking request"
                  onRequestClose={this.handleCloseModal(false)}
                  shouldCloseOnOverlayClick={true}
                  overlayClassName="booking-overlay">
                  <BookingModal
                    errors={this.props.errors}
                    modalState={this.state.modalState}
                    updateStartDate={this.updateStartDate}
                    updateEndDate={this.updateEndDate}
                    updateBody={this.updateBody}
                    handleSubmit={this.handleSubmit}/>
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
                  <div className="host-info-item-title">
                    Age/Sex:
                  </div>
                  <div className="host-info-item-content">
                    {age_sex ? age_sex : "Age/Sex Not listed"}
                  </div>
                </div>
                <div className="host-personal-info-item">
                  <div className="host-info-item-title">
                    Langauges:
                  </div>
                  <div className="host-info-item-content">
                    {languages ? "Fluent in " + languages : "Langauges no listed"}
                  </div>
                </div>
                <div className="host-personal-info-item">
                  <div className="host-info-item-title">
                    Country:
                  </div>
                  <div className="host-info-item-content">
                    {country}
                  </div>
                </div>
                <div className="host-personal-info-item">
                  <div className="host-info-item-title">
                    Occupation:
                  </div>
                  <div className="host-info-item-content">
                    {occupation ? occupation: "No occupation listed"}
                  </div>
                </div>
              </div>
              <div className="host-detail-info-container">
                <div>
                  <div className="about-title">About me:</div>
                  <div className="about-text">
                    {about ? about : "No about listed"}
                  </div>
                </div>
                <div>
                  <div className="about-title">Interest:</div>
                  <div className="about-text">
                    {interest ? interest : "No interest listed"}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (this.state.action.host_references) {
      const references = this.state.hostReferences;
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
                  onClick={this.handleOpenModal(false)}
                  className="request-booking">
                  {this.state.bookingStatus}
                </button>
                <Modal
                  handleSubmit={this.handleSubmit}
                  showModal={this.state.showModal}
                  handleCloseModal={this.handleCloseModal(false)}
                  isOpen={this.state.showModal}
                  className="booking-modal"
                  contentLabel="Booking request"
                  onRequestClose={this.handleCloseModal(false)}
                  shouldCloseOnOverlayClick={true}
                  overlayClassName="booking-overlay">
                  <BookingModal
                    errors={this.props.errors}
                    modalState={this.state.modalState}
                    updateStartDate={this.updateStartDate}
                    updateEndDate={this.updateEndDate}
                    updateBody={this.updateBody}
                    handleSubmit={this.handleSubmit}/>
                </Modal>
              </div>
              <div className="host-info-nav-container">
                <button
                  onClick={this.handleSwitchDisplay("host_profile")}
                  className="host-links">
                  About
                </button>
                <button
                  onClick={this.handleOpenModal(true)}
                  className="add-reference">
                  Add Reference
                </button>
                <Modal
                  showModal={this.state.showModalRef}
                  handleCloseModal={this.handleCloseModal(true)}
                  isOpen={this.state.showModalRef}
                  className="reference-modal"
                  contentLabel="New Reference"
                  onRequestClose={this.handleCloseModal(true)}
                  shouldCloseOnOverlayClick={true}
                  overlayClassName="reference-overlay">
                  <NewReferenceModal
                    errors={this.props.errors}
                    referenceState={this.state.referenceState}
                    updateComment={this.updateComment}
                    handleNewReference={this.handleNewReference}/>
                </Modal>
                <button
                  onClick={this.handleSwitchDisplay("host_location")}
                  className="host-links">
                  Location
                </button>
              </div>
              <div className="references-container">
                <ul className="indv-references-container">
                  { (Object.keys(references).length === 0) ?
                  <div className="no-references">
                    User Has No References
                  </div>
                   :
                   <div>
                    {Object.keys(references).slice(0).reverse().map( (key, idx) => (
                    <li
                      key={idx}>
                      <div className="one-div-to-rule-them-all">
                        <div
                          className="references-img"
                          style={this.getImage(references[key].traveler_pic)}>
                        </div>
                        <div className="references-content-container">
                          <div className="references-name">
                            {
                              references[key].traveler_firstname +
                              ' ' + references[key].traveler_lastname }
                            </div>
                            <div>
                              {references[key].comment}
                            </div>
                          </div>
                      </div>
                    </li>
                    ))}
                  </div>
                  }
                </ul>
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
                <button
                  onClick={this.handleOpenModal(false)}
                  className="request-booking">
                  {this.state.bookingStatus}
                </button>
                <Modal
                  handleSubmit={this.handleSubmit}
                  showModal={this.state.showModal}
                  handleCloseModal={this.handleCloseModal(false)}
                  isOpen={this.state.showModal}
                  className="booking-modal"
                  contentLabel="Booking request"
                  onRequestClose={this.handleCloseModal(false)}
                  shouldCloseOnOverlayClick={true}
                  overlayClassName="booking-overlay">
                  <BookingModal
                    errors={this.props.errors}
                    modalState={this.state.modalState}
                    updateStartDate={this.updateStartDate}
                    updateEndDate={this.updateEndDate}
                    updateBody={this.updateBody}
                    handleSubmit={this.handleSubmit}/>
                </Modal>
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
