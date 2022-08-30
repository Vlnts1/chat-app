import React from 'react';
import { Container, Input } from './ChatInput.styled';

const ChatInput = () => {
  return (
    <Container>
      <Input placeholder="Type your message..." />
    </Container>
  );
};

export { ChatInput };
