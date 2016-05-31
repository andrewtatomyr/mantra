import React from 'react';

const MessagesList = ({messages}) => (
  <div className='postlist'>
    <ul>
      {this.props.messages.map((message) => (
        <Message key={message._id} message={message} />
      ))}
    </ul>
  </div>
);

export default MessagesList;
