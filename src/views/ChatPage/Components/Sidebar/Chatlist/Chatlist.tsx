import React from 'react';
import { ChatItem } from '../ChatItem/ChatItem';
import { ChatListHeader, Container } from './ChatList.styled';

const ChatList = () => {
  return (
    <Container>
      <ChatListHeader>Chats</ChatListHeader>
      <ChatItem />
      <ChatItem />
      <ChatItem />
      <ChatItem />
      <ChatItem />
    </Container>
  );
};

export { ChatList };
