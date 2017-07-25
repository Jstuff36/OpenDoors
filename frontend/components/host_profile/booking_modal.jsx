import React from 'react';

class BookingModal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="booking-modal-container">
        <div className="booking-modal-heading-container">
          <div className="booking-dates">
            Date Range
          </div>
          <div className="send-booking">
            Send
          </div>
        </div>
        <div className="booking-body">
          Body
        </div>
      </div>
    );
  }

}

export default BookingModal;
