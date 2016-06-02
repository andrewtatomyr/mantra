import {Messages} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';


Meteor.publish("messages", (userLocation) => {
  return Messages.find({userLocation});
});

Meteor.publish("userParams", () => {
  console.log("_id: ",this.userId);
  return Meteor.users.find({_id: this.userId}, {fields: {name: 1}});
});
