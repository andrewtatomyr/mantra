import {Messages} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';



Meteor.methods({

  "messages.insert"(text, location) {
    check(text, String);

    if (!this.userId) {
      throw new Meteor.Error('not-authorized');
    }

    Messages.insert({
      text,
      createdAt: new Date(),
      author: this.userId,
      username: Meteor.users.findOne(this.userId).name,
      location,
    });
  },

});
