import React from 'react';
import { Message } from '../Message/Message';
import { Container } from './MessageList.styled';

function MessageList() {
  return (
    <Container>
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
    </Container>
  );
}

export { MessageList };
