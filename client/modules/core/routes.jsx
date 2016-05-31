import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from './components/main_layout';
import MessagesList from './containers/messages';
//import Post from './containers/post';
//import NewPost from './containers/newpost';

export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(MainLayout);





  FlowRouter.route('/messages/:location', {
    name: 'messages',
    action: function(params) {
      console.log("[LOCATION is]:", params.location);


      mount(MainLayoutCtx, {
        content: () => (<MessagesList location={params.location} />)
      });



    }
  });

  FlowRouter.route('/', {
    name: 'messages',
    action: function(params) {

      mount(MainLayoutCtx/*, {
        content: () => (<MessagesList />)
      }*/);


    }
  });


  /*

  FlowRouter.route('/', {
    name: 'posts.list',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<PostList />)
      });
    }
  });

  FlowRouter.route('/post/:postId', {
    name: 'posts.single',
    action({postId}) {
      mount(MainLayoutCtx, {
        content: () => (<Post postId={postId}/>)
      });
    }
  });

  FlowRouter.route('/new-post', {
    name: 'newpost',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<NewPost/>)
      });
    }
  });
  */


}
