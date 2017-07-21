import React from 'react';
import ReactDOM from 'react-dom';

class ListingsNavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "San Francisco"
    };
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect() {
    debugger;
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>Find Host in {this.state.city}</h1>
        <select onChange={this.handleSelect}>
          <option value="San Francisco">San Francisco</option>
        </select>
      </div>
    );
  }
}

export default ListingsNavBar;
