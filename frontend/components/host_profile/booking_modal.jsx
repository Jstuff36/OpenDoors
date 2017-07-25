import React from 'react';

class BookingModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dates: "",
      body: ""
    };
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  render() {
    return(
      <form className="booking-modal-container">
        <div className="booking-modal-heading-container">
          <input
            className="booking-dates booking_placeholder"
            type="text"
            onChange={this.update('dates')}
            placeholder="Date: dd/mm/yy"/>
          <input
            className="send-booking booking_placeholder"
            type="submit"
            value="Send"/>
        </div>
        <textarea
          className="booking-body booking_placeholder"
          type="text"
          onChange={this.update('body')}
          placeholder="Enter a message">
        </textarea>
      </form>
    );
  }

}

export default BookingModal;
