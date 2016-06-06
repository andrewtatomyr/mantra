import {
  useDeps, composeWithTracker, composeAll
} from 'mantra-core';
import Component from '../components/NewMessage';


export const composer = ({context }, onData) => {
  const {Meteor, Collections/*??*/} = context();

  if (Meteor.subscribe('currentUser').ready()) {
    const currentUser = /*Collections.*/Meteor.user(); //?

    console.log("[newMessage] : ");
    console.log(currentUser);

    onData(null, {currentUser});
  }

};


export const depsMapper = (context, actions) => ({
  create: actions.newMessage.create,
  context: () => context  // ??
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Component);
