import MessagesList from '../components/MessagesList.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';


//import {FlowRouter} from 'meteor/kadira:flow-router';


export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();
  let userLocation = FlowRouter.getParam('userLocation');

  if (Meteor.subscribe('messages', userLocation).ready()) {
    const messages = Collections.Messages.find({}, { sort: { createdAt: -1 } }).fetch();
    onData(null, {messages});
  }
};

export default composeAll(
  composeWithTracker(composer),
  useDeps()
)(MessagesList);
