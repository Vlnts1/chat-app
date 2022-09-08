import React, { FC } from 'react';
import {
  MessageDate,
  MessageContainer,
  MessageBox,
  ReceiverUserAvatar,
  MessageText,
} from './Message.styled';

interface MessageProps {
  IsMyMessage: boolean;
}

const Message: FC<MessageProps> = ({ IsMyMessage }) => {
  return (
    <MessageContainer IsMyMessage={IsMyMessage}>
      <MessageBox>
        <ReceiverUserAvatar
          src="https://cdn-icons-png.flaticon.com/512/6997/6997660.png"
          alt="Receiver User Avatar"
          className="ReceiverUserAvatar"
        />
        <MessageText className="MessageText">We are losing money</MessageText>
      </MessageBox>
      <MessageDate>17:00 17/02/19</MessageDate>
    </MessageContainer>
  );
};

export { Message };
