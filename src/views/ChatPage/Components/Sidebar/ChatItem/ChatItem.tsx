import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Message, User } from '../../../../../types/Types';
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

type ChatItemProps = {
  specificUser: User;
  specificUserMessages: Message[];
};

const ChatItem = ({ specificUser, specificUserMessages }: ChatItemProps) => {
  const [latestMessage, setLatestMessage] = useState<Message>({} as Message);
  const [latestMessageTime, setLatestMessageTime] = useState<string>('');

  useEffect(() => {
    const sortedMessages = specificUserMessages.sort(
      (a, b) => new Date(b.time).getTime() - new Date(a.time).getTime(),
    );

    if (sortedMessages.length) {
      setLatestMessage(sortedMessages[0]);
      setLatestMessageTime(new Date(sortedMessages[0].time).toDateString());
    }
  }, [latestMessage, specificUserMessages]);

  return (
    <>
      <Link style={{ textDecoration: 'none' }} to={`/chats/${specificUser.id}`}>
        <ContainerChatItem>
          <ImageCol>
            <UserChatAvatar src={specificUser.avatar} alt="User Chat Avatar" />
            <OnlineIndicator />
          </ImageCol>

          <DetailsCol>
            <ChatListHeader>
              <ChatTitle>{specificUser.name}</ChatTitle>
              <ChatCreatedDate>{latestMessageTime}</ChatCreatedDate>
            </ChatListHeader>

            <ChatMessageCol>
              <ChatLastMessage>{latestMessage.text}</ChatLastMessage>
            </ChatMessageCol>
          </DetailsCol>
        </ContainerChatItem>
      </Link>
    </>
  );
};

export { ChatItem };
