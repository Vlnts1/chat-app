import React from 'react';
import { ChatInputCollumn, Container, MessageListCollumn, Row } from './Chat.styled';
import { ChatInput } from './ChatInput/ChatInput';
import { HeaderCurrentUser } from './HeaderCurrentUser/HeaderCurrentUser';
import { MessageList } from './MessageList/MessageList';

const Chat = () => {
  return (
    <Container>
      <HeaderCurrentUser />
      <Row>
        <MessageListCollumn>
          <MessageList />
        </MessageListCollumn>
        <ChatInputCollumn>
          <ChatInput />
        </ChatInputCollumn>
      </Row>
    </Container>
  );
};

export { Chat };
