import {
  useDeps, composeWithTracker, composeAll
} from 'mantra-core';
import Component from '../components/NewMessage';

export const depsMapper = (context, actions) => ({
  create: actions.newMessage.create,
  context: () => context  // ??
});

export default composeAll(
  //composeWithTracker(composer),
  useDeps(depsMapper)
)(Component);
