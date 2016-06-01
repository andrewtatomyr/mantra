import { Meteor } from 'meteor/meteor';


Meteor.startup(() => {

  Accounts.onCreateUser((options, user) => {
    user.name = user.emails[0].address;
    user.name = user.name.substring(0,user.name.indexOf("@"));
    return user;
  });

});
