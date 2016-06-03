import {
  useDeps, composeWithTracker, composeAll
} from 'mantra-core';
import Component from '../components/ProfileEdit.jsx';

export const composer = ({context }, onData) => {

  const {LocalState} = context();
  const showProfile = LocalState.get('showProfile');


  const {Meteor, Collections/*??*/} = context();




  if (Meteor.subscribe('currentUser').ready()) {
    const currentUser = /*Collections.*/Meteor.user(); //?

    console.log(currentUser);


    onData(null, {currentUser, showProfile});
  }

};



export const depsMapper = (context, actions) => ({
  updateProfile: actions.profileEdit.updateProfile,  // ! ??
  toggle: actions.profile.toggle, // ????????????????????????????????????????
  context: () => context  // ! ??
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Component);
