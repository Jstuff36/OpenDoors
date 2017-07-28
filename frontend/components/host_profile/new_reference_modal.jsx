import React from 'react';

class NewReferenceModal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="new-reference-main-container">
        <ul className="reference-errors-container">
          {this.props.errors.map( (error, idx) => (
            <li key={idx}
              className="reference-errors">
              {error}
            </li>
          ))}
        </ul>
        <form
          className="reference-modal-form-container"
          onSubmit={this.props.handleNewReference}>
          <div className="reference-modal-heading-container">
            <div className="reference-heading-container">
              <div>
                New Reference
              </div>
              <input
                className="send-reference booking_placeholder"
                type="submit"
                value="Send"/>
            </div>
            <textarea
              value={this.props.referenceState.comment}
              className="reference-comment booking_placeholder"
              type="text"
              onChange={this.props.updateComment('comments')}
              placeholder="Comments">
            </textarea>
          </div>
        </form>
      </div>
    );
  }
}

export default NewReferenceModal;
