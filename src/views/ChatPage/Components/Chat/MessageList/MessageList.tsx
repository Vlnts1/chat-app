import React, { FC } from 'react';
import { Message, User } from '../../../../../types/Types';
import { ChatMessage } from '../Message/Message';
import { Container } from './MessageList.styled';

type MessageProps = {
  isMyMessage: boolean;
  currentMessages: Message[];
  activeUser: User;
};

const MessageList: FC<MessageProps> = ({ currentMessages, activeUser }) => {
  return (
    <Container>
      {currentMessages.map((message, index) => (
        <ChatMessage
          isMyMessage={message.receiver ? false : true}
          key={index}
          message={message}
          userAvatar={activeUser.avatar}
        />
      ))}
    </Container>
  );
};
export { MessageList };
