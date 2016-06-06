import {
  useDeps, composeWithTracker, composeAll
} from 'mantra-core';
import Component from '../components/Profile.jsx';

export const composer = ({context }, onData) => {
  const {Meteor, Collections/*??*/} = context();

  if (Meteor.subscribe('currentUser').ready()) {
    const currentUser = /*Collections.*/Meteor.user(); //?
    onData(null, {currentUser});
  }

};


export const depsMapper = (context, actions) => ({
  toggle: actions.profile.toggle,  // ! ??
  context: () => context  // ! ??
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Component);
