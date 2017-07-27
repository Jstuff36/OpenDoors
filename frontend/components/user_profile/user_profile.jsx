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
      userInfo: {
        id: this.props.currentUser.id,
        address: this.props.currentUser.address,
        zipcode: this.props.currentUser.zipcode,
        languages: this.props.currentUser.languages,
        age: this.props.currentUser.age,
        sex: this.props.currentUser.sex,
        occupation: this.props.currentUser.occupation,
        about: this.props.currentUser.about
      }
    };
    this.handleSwitchDisplay = this.handleSwitchDisplay.bind(this);
    this.seperateHostingsAndUserTrips = this.seperateHostingsAndUserTrips.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.geocodeAddress = this.geocodeAddress.bind(this);
  }

  componentDidMount() {
    const id = parseInt(this.props.match.params.id);

    this.props.fetchAllTrips(id).then( (resp) => {
      this.setState({
        trips: resp.trips
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
    let allTrips = this.state.trips;
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
    let detailedAddress = address.concat(" ").concat(zipcode);
    var geocoder = new google.maps.Geocoder();
    let userInfo = this.state.userInfo;
    let updateUser = this.props.updateUser;
    geocoder.geocode({'address': detailedAddress}, function(results, status) {
      let latLng = results[0].geometry.location;
      userInfo.location = [latLng.lat(), latLng.lng()];
      updateUser(userInfo);
    });
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
                     <div className="trips-refs-heading">
                       Upcoming Trips
                     </div>
                     <ul>
                       {allTrips[0].map( (trip, idx) => (
                         <Link to={`/listings/${trip.host_id}`}  key={idx}>
                           <li className="trip-listings-container">
                             <div
                               className="trip-img"
                               style={this.getImage(trip.host_pic)}>
                             </div>
                             <div className="trip-listings-info-container">
                               <div className="trip-name">
                                 {trip.host_firstname + " " + trip.host_lastname }
                               </div>
                               <div>
                                 {trip.dates[0] + "-" + trip.dates[1]}
                               </div>
                               <div>
                                 {trip.status}
                               </div>
                             </div>
                           </li>
                        </Link>
                       ))}
                     </ul>
                     <div className="trips-refs-heading">
                       Upcoming Hostings
                     </div>
                     <ul>
                       {allTrips[1].map( (trip, idx) => (
                         <Link to={`/listings/${trip.traveler_id}`}  key={idx}>
                           <li className="trip-listings-container">
                             <div
                               className="trip-img"
                               style={this.getImage(trip.traveler_pic)}>
                             </div>
                             <div className="trip-listings-info-container">
                               <div className="trip-name">
                                 {trip.traveler_firstname + " " + trip.traveler_lastname }
                               </div>
                               <div>
                                 {trip.dates[0] + "-" + trip.dates[1]}
                               </div>
                               <div>
                                 {trip.status}
                               </div>
                             </div>
                           </li>
                        </Link>
                       ))}
                     </ul>
                     <div>

                     </div>
                   </div>
                   <div className="user-references-container">
                     <div className="trips-refs-heading">
                       My References
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
                  <input
                    className="edit-profile-submit"
                    type="submit"
                    value="Upate Profile" />
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
