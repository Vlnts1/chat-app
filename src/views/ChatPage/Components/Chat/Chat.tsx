import React from 'react';
import { Container, Col } from './Chat.styled';
import { ChatInput } from './ChatInput/ChatInput';
import { CurrentUserHeader } from './CurrentUserHeader/CurrentUserHeader';
import { MessageList } from './MessageList/MessageList';

const Chat = () => {
  return (
    <Container>
      <CurrentUserHeader />
      <Col>
        <MessageList IsMyMessage />
        <ChatInput />
      </Col>
    </Container>
  );
};

export { Chat };
