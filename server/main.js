import { Meteor } from 'meteor/meteor';


import publications from './publications';
//import methods from './methods';
//import addInitialData from './configs/initial_adds.js';


Meteor.startup(() => {

  Accounts.onCreateUser((options, user) => {
    user.name = user.emails[0].address;
    user.name = user.name.substring(0,user.name.indexOf("@"));
    return user;
  });

});


publications();
//methods();
//addInitialData();
