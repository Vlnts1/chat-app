import React from 'react';
import { ChatList } from './Chatlist/Chatlist';
import { ChatSearch } from './ChatSearch/ChatSearch';
import { HeaderAuthUser } from './HeaderAuthUser/HeaderAuthUser';
import { Container, Row } from './Sidebar.styled';

const Sidebar = () => {
  return (
    <Container>
      <Row>
        <HeaderAuthUser />
        <ChatSearch />
      </Row>
      <ChatList />
    </Container>
  );
};

export { Sidebar };
