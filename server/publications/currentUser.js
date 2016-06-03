//import {}
import {Meteor} from 'meteor/meteor';


Meteor.publish("currentUser", () => {
  console.log("_id: ", this.userId);
  return Meteor.users.find({_id: this.userId}, {fields: {name: 1}});
});
