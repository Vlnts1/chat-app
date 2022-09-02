import React from 'react';
import {
  UserChatAvatar,
  ChatCreatedDate,
  ChatLastMessage,
  ChatMessageCol,
  ChatTitle,
  ContainerChatItem,
  DetailsCol,
  ImageCol,
  OnlineIndicator,
  ChatListHeader,
} from './ChatItem.styled';

const ChatItem = () => {
  return (
    <ContainerChatItem>
      <ImageCol>
        <UserChatAvatar
          src="https://cdn-icons-png.flaticon.com/512/6997/6997660.png"
          alt="User Chat Avatar"
        />
        <OnlineIndicator />
      </ImageCol>

      <DetailsCol>
        <ChatListHeader>
          <ChatTitle>Josefina</ChatTitle>
          <ChatCreatedDate>12/09/22</ChatCreatedDate>
        </ChatListHeader>

        <ChatMessageCol>
          <ChatLastMessage>We are losing money! Quick!</ChatLastMessage>
        </ChatMessageCol>
      </DetailsCol>
    </ContainerChatItem>
  );
};

export { ChatItem };
