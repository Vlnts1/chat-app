import React from 'react';
import {
  MessageDate,
  MessageContainer,
  MessageBox,
  ReceiverAvatar,
  MessageText,
} from './Message.styled';

const Message = () => {
  return (
    <MessageContainer>
      <MessageBox>
        <ReceiverAvatar src="https://cdn-icons-png.flaticon.com/512/6997/6997660.png" alt="" />
        <MessageText> Message</MessageText>
      </MessageBox>
      <MessageDate>17:00 17/02/19</MessageDate>
    </MessageContainer>
  );
};

export { Message };
