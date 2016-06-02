export default {
  create({Meteor}, text, userLocation) {
    Meteor.call('messages.insert', text,  userLocation);
  },
};
