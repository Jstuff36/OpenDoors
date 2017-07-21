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

  handleSelect(e) {
    this.setState({
      city: e.currentTarget.value
    });
  }

  render() {
    return (
      <div>
        <h1>Find Host in {this.state.city}</h1>
        <select onChange={this.handleSelect}>
          <option value="San Francisco">San Francisco</option>
          <option value="CasaBlanca">CasaBlanca</option>
        </select>
      </div>
    );
  }
}

export default ListingsNavBar;
