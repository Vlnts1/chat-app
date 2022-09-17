import React, { FC } from 'react';
import { Message } from '../../../../../types/Types';
import {
  MessageDate,
  MessageContainer,
  MessageBox,
  ReceiverUserAvatar,
  MessageText,
} from './Message.styled';

type MessageProps = {
  isMyMessage: boolean;
  message: Message;
  userAvatar: string;
};

const ChatMessage: FC<MessageProps> = ({ isMyMessage, message, userAvatar }) => {
  const messageDate = new Date(message.time).toLocaleString();

  return (
    <MessageContainer isMyMessage={isMyMessage}>
      <MessageBox>
        <ReceiverUserAvatar
          src={userAvatar}
          alt="Receiver User Avatar"
          className="ReceiverUserAvatar"
        />
        <MessageText className="MessageText">{message.text}</MessageText>
      </MessageBox>
      <MessageDate>{messageDate}</MessageDate>
    </MessageContainer>
  );
};

export { ChatMessage };
