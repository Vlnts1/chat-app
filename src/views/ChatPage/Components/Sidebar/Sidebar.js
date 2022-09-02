import React from 'react';
import { ChatList } from './Chatlist/Chatlist';
import { ChatSearch } from './ChatSearch/ChatSearch';
import { AuthUserHeader } from './AuthUserHeader/AuthUserHeader';
import { Container, Col } from './Sidebar.styled';

const Sidebar = () => {
  return (
    <Container>
      <Col>
        <AuthUserHeader />
        <ChatSearch />
      </Col>
      <ChatList />
    </Container>
  );
};

export { Sidebar };
