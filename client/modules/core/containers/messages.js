import MessagesList from '../components/MessagesList.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();

  console.log("[loc-subscr] :"/*,location*/);

  if (Meteor.subscribe('messages', 1/*location*/).ready()) {
    const messages = Collections.Messages.find({}, { sort: { createdAt: -1 } }).fetch();
    onData(null, {messages});
  }
};

export default composeAll(
  composeWithTracker(composer),
  useDeps()
)(MessagesList);
