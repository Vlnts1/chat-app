import React from 'react';
import { Chat } from './Components/Chat/Chat';
import { Sidebar } from './Components/Sidebar/Sidebar';

const ChatPage = () => {
  return (
    <div>
      <Chat />
      <Sidebar />
    </div>
  );
};

export { ChatPage };
