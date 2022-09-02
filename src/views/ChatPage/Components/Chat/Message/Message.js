import React from 'react';
import {
  MessageDate,
  MessageContainer,
  MessageBox,
  ReceiverUserAvatar,
  MessageText,
  MessagesCol,
} from './Message.styled';

const Message = () => {
  return (
    <MessageContainer>
      <MessagesCol>
        <MessageBox>
          <ReceiverUserAvatar
            src="https://cdn-icons-png.flaticon.com/512/6997/6997660.png"
            alt="Receiver User Avatar"
          />
          <MessageText>We are losing money</MessageText>
        </MessageBox>
        <MessageDate>17:00 17/02/19</MessageDate>
      </MessagesCol>

      <MessagesCol myMessage>
        <MessageBox myMessage>
          <MessageText myMessage> Message</MessageText>
        </MessageBox>
        <MessageDate myMessage>17:00 17/02/19</MessageDate>
      </MessagesCol>
    </MessageContainer>
  );
};

export { Message };
