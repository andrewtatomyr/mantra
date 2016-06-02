import {
  useDeps, composeWithTracker, composeAll
} from 'mantra-core';
import Component from '../components/Profile.jsx';

export const depsMapper = (context, actions) => ({
  toggle: actions.profile.toggle,
  context: () => context  // ??
});

export default composeAll(
  //composeWithTracker(composer),
  useDeps(depsMapper)
)(Component);
