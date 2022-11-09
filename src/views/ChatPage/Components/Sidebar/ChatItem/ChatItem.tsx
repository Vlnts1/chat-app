import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();

  const changeChat = () => {
    navigate(`/chats/${specificUser.id}`);
  };

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
    <ContainerChatItem key={specificUser.id} onClick={changeChat}>
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
  );
};

export { ChatItem };
