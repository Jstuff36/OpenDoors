import React from 'react';
import UserNavBar from './user_nav_bar';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: this.props.currentUser,
      trips: ""
    };
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



render() {
  const {
    firstname,
    lastname,
    picture,
  } = this.state.currentUser;

  if (!this.state.trips) {
    return <div></div>;
  } else {
    return(
        <div>
          <UserNavBar />
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
                   <div>
                     Upcoming Trips
                   </div>
                   <ul>
                     {Object.keys(this.state.trips).map( (key, idx) => (
                       <li key={idx}>
                         {this.state.trips[key].host_firstname}
                       </li>
                     ))}
                   </ul>
                   <div>
                     
                   </div>
                 </div>
                 <div className="user-references-container">
                   <div>
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
