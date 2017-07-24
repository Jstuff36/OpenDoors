import React from 'react';
import HostNavBar from './host_nav_bar';

class HostProfileRefrences extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <HostNavBar
          logout={this.props.logout}
          history={this.props.history}/>
      </div>
    );
  }
}
