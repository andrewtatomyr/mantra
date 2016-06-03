import {Messages} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
//import {check} from 'meteor/check';


Meteor.publish("messages", (userLocation) => {
  return Messages.find({userLocation});
});
