import React from 'react';
import ReactDOM from 'react-dom';

class NewMessage extends React.Component {
  constructor(props) {
    super(props);
  }

  handleSubmit(event) {
    event.preventDefault();

    const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();

    let location = FlowRouter.getParam('location');
    Meteor.call('messages.insert', text,  location);
    ReactDOM.findDOMNode(this.refs.textInput).value = "";
  }


  render() {

    console.log(Meteor.user());
    
    return FlowRouter.getParam('location') /*&& Meteor.user()*/ ? (
      <form className="new-message" onSubmit={this.handleSubmit.bind(this)}>
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
