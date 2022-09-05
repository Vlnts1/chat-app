import React from 'react';
import { ThemeProvider } from 'styled-components';
import { ChatCol, Container, SidebarCol } from './App.styled';
import { theme } from './styles/theme';
import { Chat } from './views/ChatPage/Components/Chat/Chat';
import { Sidebar } from './views/ChatPage/Components/Sidebar/Sidebar';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <SidebarCol>
          <Sidebar />
        </SidebarCol>
        <ChatCol>
          <Chat />
        </ChatCol>
      </Container>
    </ThemeProvider>
  );
};

export { App };
