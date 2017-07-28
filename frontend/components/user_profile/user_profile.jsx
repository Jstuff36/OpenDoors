import React from 'react';
import UserNavBar from './user_nav_bar';
import { Link } from 'react-router-dom';
import { Route, Redirect, withRouter } from 'react-router-dom';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      action: {
        user_profile: true,
        user_profile_edit: false,
      },
      currentUser: this.props.currentUser,
      trips: "",
      updateStatus: "",
      userReferences: "",
      userInfo: {
        id: this.props.currentUser.id,
        address: this.props.currentUser.address,
        zipcode: this.props.currentUser.zipcode,
        languages: this.props.currentUser.languages,
        age: this.props.currentUser.age,
        sex: this.props.currentUser.sex,
        occupation: this.props.currentUser.occupation,
        about: this.props.currentUser.about,
        interest: this.props.currentUser.interest
      }
    };
    this.handleSwitchDisplay = this.handleSwitchDisplay.bind(this);
    this.seperateHostingsAndUserTrips = this.seperateHostingsAndUserTrips.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.geocodeAddress = this.geocodeAddress.bind(this);
    this.handleTripStatus = this.handleTripStatus.bind(this);
  }

  componentWillReceiveProps(newProps) {

  }

  componentDidMount() {
    const id = parseInt(this.props.match.params.id);
    this.props.fetchAllTrips(id).then( (resp) => {
      this.setState({
        trips: resp.trips
      });
    });
    this.props.fetchAllReferences(id).then( (resp) => {
      this.setState({
        userReferences: resp.references
      });
    });
  }

  handleSwitchDisplay(action) {
    return (e) => {
      let tempObj = {
        user_profile: false,
        user_profile_edit: false,
      };
      tempObj[action] = true;
      this.setState({action: tempObj});
      e.preventDefault();

    };
  }

  update(field) {
    return e => {
      let  selectedfield = this.state.userInfo;
      selectedfield[field] = e.currentTarget.value;
      this.setState({selectedfield});
    };
  }

  getImage(imageUrl) {
    return { backgroundImage: `url(${imageUrl})` };
  }

  seperateHostingsAndUserTrips() {
    let allTrips = this.props.currentTrips;
    let trips = [];
    let hostings = [];
    const id = parseInt(this.props.match.params.id);
    Object.keys(allTrips).forEach( (key) => {
      if (allTrips[key].host_id === id) {
        hostings.push(allTrips[key]);
      } else {
        trips.push(allTrips[key]);
      }
    });
    return [trips, hostings];
  }

  handleSubmit(e) {
      e.preventDefault();
      this.geocodeAddress(this.state.userInfo.address, this.state.userInfo.zipcode);
  }

  geocodeAddress(address, zipcode) {
    let updateUser = this.props.updateUser;
    if (address && zipcode) {
      let detailedAddress = address.concat(" ").concat(zipcode);
      var geocoder = new google.maps.Geocoder();
      let userInfo = this.state.userInfo;
      geocoder.geocode({'address': detailedAddress}, function(results, status) {
        let latLng = results[0].geometry.location;
        userInfo.location = [latLng.lat(), latLng.lng()];
        updateUser(userInfo).then( () => (
          this.setState({
            updateStatus: "Profile Updated"
          })
        ));
      }.bind(this));
    } else {
      updateUser(this.state.userInfo).then( () => (
        this.setState({
          updateStatus: "Profile Updated"
        })
      ));
    }
  }

  handleTripStatus(e) {
    e.preventDefault();
    let status = $(e.target).text();
    let id = parseInt(e.target.id);
    if (status === "Approve") {
      this.props.approveTrip(
        {
          id: id,
          status: "Approved"
        });
    } else {
      this.props.deleteTrip( {id: id} );
    }
  }


render() {
  const {
    firstname,
    lastname,
    picture,
  } = this.state.currentUser;

  if (!this.state.trips) {
    return <div></div>;
  } else {
    if (this.state.action.user_profile) {
      const allTrips = this.seperateHostingsAndUserTrips();
      const references = this.state.userReferences;
      return(
          <div>
            <UserNavBar
              logout={this.props.logout}/>
            <div className="user-container">
              <div className="user-side-container">
                <div
                  className="user-img"
                  style={this.getImage(picture)}>
                </div>
                <div className="user-name">
                  {firstname} {lastname}</div>
              </div>
              <div className="user-main-container">
                <div className="user-options-container">
                  <div className="user-current-page">
                    My Profile
                  </div>
                  <button
                    className="user-links"
                    onClick={this.handleSwitchDisplay("user_profile_edit")}>
                    Edit Profile
                  </button>
                </div>
                <div className="user-trips-refs-container">
                   <div className="upcoming-trips-container">
                     <ul>
                       <div className="trips-refs-heading">
                         Upcoming Trips
                       </div>
                       { (allTrips[0].length === 0) ?
                        <div className="no-trips-hostings">
                         No Upcoming Trips
                        </div> :
                      <div>
                       {allTrips[0].map( (trip, idx) => (
                           <li key={idx} className="trip-listings-container">
                             <Link to={`/listings/${trip.host_id}`}>
                               <div
                                 className="trip-img"
                                 style={this.getImage(trip.host_pic)}>
                               </div>
                            </Link>
                             <div className="trip-listings-info-container">
                               <div className="trip-name">
                                 {trip.host_firstname + " " + trip.host_lastname }
                               </div>
                               <div>
                                 {trip.dates[0] + " To " + trip.dates[1]}
                               </div>
                               <div className="trip-status">
                                 <div>
                                   Trip Status:
                                 </div>
                                 <div>
                                   {trip.status}
                                 </div>
                               </div>
                               <div className="cancel-button">
                                 <div>
                                   Need to Cancel?
                                 </div>
                                 <button
                                   id = {trip.id}
                                   onClick={this.handleTripStatus}>
                                   Cancel
                                 </button>
                               </div>
                             </div>
                           </li>
                       ))}
                       </div>
                     }
                     </ul>
                     <ul>
                       <div className="trips-refs-heading">
                         Upcoming Hostings
                       </div>
                       { (allTrips[1].length === 0) ?
                        <div className="no-trips-hostings">
                         No Upcoming Hosting
                       </div> :
                      <div>
                       {allTrips[1].map( (trip, idx) => (
                           <li  key={idx} className="trip-listings-container">
                             <Link to={`/listings/${trip.traveler_id}`}>
                               <div
                                 className="trip-img"
                                 style={this.getImage(trip.traveler_pic)}>
                               </div>
                             </Link>
                             <div className="trip-listings-info-container">
                               <div className="trip-name">
                                 {trip.traveler_firstname + " " + trip.traveler_lastname }
                               </div>
                               <div>
                                 {trip.dates[0] + " To " + trip.dates[1]}
                               </div>
                               <div className="trip-status">
                                 <div>
                                   Trip Status:
                                 </div>
                                 <div>
                                   {trip.status}
                                 </div>
                               </div>
                                 { (trip.status === "Pending") ?
                                   (<div className="trip-pending-buttons">
                                     <button
                                       className="approve-trip"
                                       id = {trip.id}
                                       onClick={this.handleTripStatus}>
                                       Approve
                                     </button>
                                     <button
                                       className="decline-trip"
                                       id = {trip.id}
                                       onClick={this.handleTripStatus}>
                                       Decline
                                     </button>
                                   </div>) : (
                                    <div className="cancel-button">
                                      <div>
                                        Need to Cancel?
                                      </div>
                                      <button
                                        id = {trip.id}
                                        onClick={this.handleTripStatus}>
                                        Cancel
                                      </button>
                                    </div>)
                                 }
                             </div>
                           </li>
                       ))}
                     </div>
                    }
                     </ul>
                     <div>

                     </div>
                   </div>
                   <div className="user-references-container">
                     <div>
                       <ul className="user-indv-references-container">
                         <div className="trips-refs-heading">
                           My References
                         </div>
                         {Object.keys(references).map( (key, idx) => (
                           <li
                             key={idx}>
                             <div className="user-one-div-to-rule-them-all">
                               <div
                                 className="user-references-img"
                                 style={this.getImage(references[key].traveler_pic)}>
                               </div>
                               <div className="user-references-content-container">
                                 <div className="user-references-name">
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
                       </ul>
                     </div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        );
      } else {
        return(
          <div>
            <UserNavBar
              logout={this.props.logout}/>
            <div className="user-container">
              <div className="user-side-container">
                <div
                  className="user-img"
                  style={this.getImage(picture)}>
                </div>
                <div className="user-name">
                  {firstname} {lastname}</div>
              </div>
              <div className="user-main-container">
                <div className="user-options-container">
                  <button
                    className="user-links"
                    onClick={this.handleSwitchDisplay("user_profile")}>
                    My Profile
                  </button>
                  <div className="user-current-page">
                    Edit Profile
                  </div>
                </div>
                <form
                  onSubmit={this.handleSubmit}
                  className="edit-main-container">
                  <span>
                    {this.state.updateStatus}
                  </span>
                  <div>
                    <div className="input-type">
                      Address:
                    </div>
                    <input
                      className=""
                      value={this.state.userInfo.address}
                      type="text"
                      placeholder="Address"
                      onChange={this.update('address')}
                      />
                  </div>
                  <div>
                    <div className="input-type">
                      Zipcode:
                    </div>
                    <input
                      className=""
                      value={this.state.userInfo.zipcode}
                      type="text"
                      placeholder="zipcode"
                      onChange={this.update('zipcode')}
                      />
                  </div>
                  <div>
                    <div className="input-type">
                      Langauages:
                    </div>
                    <input
                      className=""
                      value={this.state.userInfo.languages.join(", ")}
                      type="text"
                      placeholder="Langauages seperated by commas"
                      onChange={this.update('languages')}
                      />
                  </div>
                  <div>
                    <div className="input-type">
                      Age:
                    </div>
                    <input
                      className=""
                      value={this.state.userInfo.age}
                      type="text"
                      placeholder="Age"
                      onChange={this.update('age')}
                      />
                  </div>
                  <div>
                    <div className="input-type">
                      Sex:
                    </div>
                    <input
                      className=""
                      value={this.state.userInfo.sex}
                      type="text"
                      placeholder="Sex"
                      onChange={this.update('sex')}
                      />
                  </div>
                  <div>
                    <div className="input-type">
                      Occupation:
                    </div>
                    <input
                      className=""
                      value={this.state.userInfo.occupation}
                      type="text"
                      placeholder="Occupation"
                      onChange={this.update('occupation')}
                      />
                  </div>
                  <div>
                    <div className="input-type">
                      About:
                    </div>
                    <input
                      className=""
                      value={this.state.userInfo.about}
                      type="text"
                      placeholder="About"
                      onChange={this.update('about')}
                      />
                  </div>
                  <div>
                    <div className="input-type">
                      Interest:
                    </div>
                    <input
                      className=""
                      value={this.state.userInfo.interest}
                      type="text"
                      placeholder="Interest"
                      onChange={this.update('interest')}
                      />
                  </div>
                  <div id="update-profile-submit">
                    <input
                      className="edit-profile-submit"
                      type="submit"
                      value="Upate Profile" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        );
      }
    }
  }
}

export default UserProfile;
