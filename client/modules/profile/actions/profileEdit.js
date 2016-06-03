export default {
  updateProfile({Meteor, LocalState}, name, email) {
    Meteor.call("user.updateProfile", name, email);
  },
};
