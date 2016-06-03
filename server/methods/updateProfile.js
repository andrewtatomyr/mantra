import {Messages} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';



Meteor.methods({

  "user.updateProfile"(name, email) {
    Meteor.users.update({_id: this.userId}, {
      $set: {
        name,
        "emails.0.address": email
      }
    });
  },

});
