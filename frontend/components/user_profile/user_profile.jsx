import React from 'react';
import UserNavBar from './user_nav_bar';
import { Link } from 'react-router-dom';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: this.props.currentUser,
      trips: ""
    };
    this.seperateHostingsAndUserTrips = this.seperateHostingsAndUserTrips.bind(this);
  }

  componentDidMount() {
    const id = parseInt(this.props.match.params.id);
    this.props.fetchAllTrips(id).then( (resp) => {
      this.setState({
        trips: resp.trips
      });
    });
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

render() {
  const {
    firstname,
    lastname,
    picture,
  } = this.state.currentUser;

  if (!this.state.trips) {
    return <div></div>;
  } else {
    const allTrips = this.seperateHostingsAndUserTrips();
    console.log(allTrips);
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
                <div>
                  Upcoming Trips
                </div>
                <div>
                  Edit Profile
                </div>
              </div>
              <div className="user-trips-refs-container">
                 <div className="upcoming-trips-container">
                   <div className="trips-refs-heading">
                     Upcoming Trips
                   </div>
                   <ul>
                     {allTrips[0].map( (trip, idx) => (
                       <Link to={`/listings/${trip.host_id}`}>
                         <li key={idx} className="trip-listings-container">
                           <div
                             className="trip-img"
                             style={this.getImage(trip.host_pic)}>
                           </div>
                           <div className="trip-listings-info-container">
                             <div>
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
                       <Link to={`/listings/${trip.trip_id}`}>
                         <li key={idx} className="trip-listings-container">
                           <div
                             className="trip-img"
                             style={this.getImage(trip.traveler_pic)}>
                           </div>
                           <div className="trip-listings-info-container">
                             <div>
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
    }
  }
}

export default UserProfile;
