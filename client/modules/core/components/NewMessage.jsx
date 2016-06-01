import React from 'react';
import ReactDOM from 'react-dom';
///import Location from './Location.jsx';

class NewMessage extends React.Component {
  constructor(props) {
    super(props);
    console.log("[construct ]");
  }

  handleSubmit(event) {
    event.preventDefault();

    const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();

    let location = FlowRouter.getParam('location');
    console.log(`new msg=`,text,`; loc: `,location);
    Meteor.call('messages.insert', text,  location);
    ReactDOM.findDOMNode(this.refs.textInput).value = "";
  }


  render() {

    console.log(Meteor.user());
    ///console.log(FlowRouter.getParam('location'));
    return (
      <form className="new-message" onSubmit={this.handleSubmit.bind(this)}>
        <input
          type="text"
          placeholder="Type new message here..."
          ref="textInput"
        />
      </form>
    );

  }


}


export default NewMessage;
