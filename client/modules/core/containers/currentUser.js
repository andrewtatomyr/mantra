/*
import from '../components/MessagesList.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';


//import {FlowRouter} from 'meteor/kadira:flow-router';





export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();
  let location = FlowRouter.getParam('location');
  //console.log("[loc-subscr] :",location);

  if (Meteor.subscribe('messages', location).ready()) {
    const messages = Collections.Messages.find({}, { sort: { createdAt: -1 } }).fetch();
    //console.log(messages);
    onData(null, {messages});
  }
};

export default composeAll(
  composeWithTracker(composer),
  useDeps()
)(MessagesList);
  */
