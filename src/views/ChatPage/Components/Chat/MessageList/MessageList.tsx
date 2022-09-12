import React, { FC } from 'react';
import { Message } from '../Message/Message';
import { Container } from './MessageList.styled';

type IsMyMessage = {
  IsMyMessage: boolean;
};

const MessageList: FC<IsMyMessage> = () => {
  return (
    <Container>
      <Message IsMyMessage />
      <Message IsMyMessage={false} />
      <Message IsMyMessage />
      <Message IsMyMessage />
      <Message IsMyMessage />
      <Message IsMyMessage />
      <Message IsMyMessage />
      <Message IsMyMessage />
      <Message IsMyMessage />
      <Message IsMyMessage />
      <Message IsMyMessage />
      <Message IsMyMessage />
    </Container>
  );
};
export { MessageList };
