import React, { FunctionComponent } from 'react';
import { Container, Input } from './ChatInput.styled';

const ChatInput: FunctionComponent = () => {
  return (
    <Container>
      <Input placeholder="Type your message..." />
    </Container>
  );
};

export { ChatInput };
