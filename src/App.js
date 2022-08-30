import React from 'react';
import { ChatCol, Container, SidebarCol } from './App.styled';
import { Chat } from './views/ChatPage/Components/Chat/Chat';
import { Sidebar } from './views/ChatPage/Components/Sidebar/Sidebar';

const App = () => {
  return (
    <Container>
      <SidebarCol>
        <Sidebar />
      </SidebarCol>
      <ChatCol>
        <Chat />
      </ChatCol>
    </Container>
  );
};

export { App };
