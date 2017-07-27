import React from 'react';

class BookingModal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="booking-main-container">
        <ul className="booking-errors-container">
          {this.props.errors.map( (error, idx) => (
            <li key={idx}
              className="booking-errors">
              {error === "User has already been taken" ? "Booking already requested" : error}
            </li>
          ))}
        </ul>
        <div>
        </div>
        <form
          className="booking-modal-container"
          onSubmit={this.props.handleSubmit}>
          <div className="booking-modal-heading-container">
            <input
              className="booking-dates booking_placeholder"
              type="date"
              value={this.props.modalState.date}
              onChange={this.props.updateDate()}
              placeholder="Start Date:"/>
            <input
              className="send-booking booking_placeholder"
              type="submit"
              value="Send"/>
          </div>
          <textarea
            value={this.props.modalState.body}
            className="booking-body booking_placeholder"
            type="text"
            onChange={this.props.updateBody()}
            placeholder="Enter a message">
          </textarea>
        </form>
      </div>
    );
  }

}

export default BookingModal;
