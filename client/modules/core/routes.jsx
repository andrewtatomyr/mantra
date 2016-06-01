import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from './components/main_layout';
import MessagesList from './containers/messagesList';

export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(MainLayout);


  FlowRouter.route('/', {
    name: 'messages',
    action: function(params) {
      mount(MainLayoutCtx);
    }
  });


  FlowRouter.route('/messages/:location', {
    name: 'messages',
    action() {
      mount(MainLayoutCtx);

    }
  });


}
