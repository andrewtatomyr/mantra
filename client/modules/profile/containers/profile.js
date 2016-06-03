import {
  useDeps, composeWithTracker, composeAll
} from 'mantra-core';
import Component from '../components/Profile.jsx';

/*export const composer = ({context /*, clearErrors*}, onData) => {
  const {LocalState} = context();


  //console.log(LocalState);

  const showProfile = LocalState.get('showProfile');
  onData(null, {showProfile});

  // clearErrors when unmounting the component
  //return clearErrors;
};*/



export const depsMapper = (context, actions) => ({
  toggle: actions.profile.toggle,  // ! ??
  context: () => context  // ! ??
});

export default composeAll(
  //composeWithTracker(composer),
  useDeps(depsMapper)
)(Component);
