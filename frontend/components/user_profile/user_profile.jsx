import React from 'react';
import UserNavBar from './user_nav_bar';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: ""
    };
  }

render() {
  return(
      <div>
        <UserNavBar />
        <div className="user-container">
          <div className="user-side-contianer">
            <div>
              FullName
            </div>
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

export default UserProfile;
