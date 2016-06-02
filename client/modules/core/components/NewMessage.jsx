import React from 'react';
import ReactDOM from 'react-dom';

class NewMessage extends React.Component {
  constructor(props) {
    super(props);
  }

  _create(event) {
    event.preventDefault();
    const text = this.refs.textInput.value.trim();
    const userLocation = FlowRouter.getParam("userLocation");
    const {create} = this.props;
    create(text, userLocation);
    this.refs.textInput.value = '';
  }


  render() {

    return FlowRouter.getParam('userLocation') /*&& Meteor.user()*/ ? (
      <form className="new-message" onSubmit={this._create.bind(this)}>
        <input
          type="text"
          placeholder="Type new message here..."
          ref="textInput"
        />
      </form>
    ) : (<div></div>);

  }


}


export default NewMessage;
