import React from 'react';
import {
  ChatAvatar,
  ChatCreatedDate,
  ChatLastMessage,
  ChatListHead,
  ChatMessageCol,
  ChatTitle,
  ContainerChatItem,
  DetailsCol,
  ImageCol,
  UserIsOnline,
} from './ChatItem.styled';

const ChatItem = () => {
  return (
    <ContainerChatItem>
      <ImageCol>
        <ChatAvatar src="https://cdn-icons-png.flaticon.com/512/6997/6997660.png" alt="" />
        <UserIsOnline />
      </ImageCol>
      <DetailsCol>
        <ChatListHead>
          <ChatTitle>Josefina</ChatTitle>
          <ChatCreatedDate>12/09/22</ChatCreatedDate>
        </ChatListHead>

        <ChatMessageCol>
          <ChatLastMessage>We are losing money! Quick!</ChatLastMessage>
        </ChatMessageCol>
      </DetailsCol>
    </ContainerChatItem>
  );
};

export { ChatItem };
