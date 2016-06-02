
import React, { Component, PropTypes }  from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';


import Navigation from './Navigation.jsx';


// Message template
import Message from './Message.jsx';

//-->
import MessagesList from '../containers/messagesList.js'; /////<---

import NewMessage from '../containers/newMessage.js'; ///<-------'./NewMessage.jsx';

import AccountsUIWrapper from './AccountsUIWrapper.jsx';


const Layout = ({content = () => null }) => (
  <div className="container">
    <header>
      <h1>Messaging</h1>

      <div className="profile-wrapper">
        <AccountsUIWrapper />
      </div>

      <div className="location-wrapper">
        <Navigation/>
      </div>

      <div className="new-message-wrapper">
        <NewMessage />
      </div>
    </header>



    <div>
      <MessagesList/>
    </div>

  </div>
);




export default Layout;
