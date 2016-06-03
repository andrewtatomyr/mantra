import {Messages} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
//import {check} from 'meteor/check';

//export default function() {}

//export default function() {}
Meteor.publish("messages", (userLocation) => Messages.find({userLocation}) );
