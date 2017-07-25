import React from 'react';

class BookingModal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <form
        className="booking-modal-container"
        onSubmit={this.props.handleSubmit}>
        <div className="booking-modal-heading-container">
          <input
            className="booking-dates booking_placeholder"
            type="text"
            value={this.props.modalState.date}
            onChange={this.props.updateDate()}
            placeholder="Date: dd/mm/yy"/>
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
    );
  }

}

export default BookingModal;
