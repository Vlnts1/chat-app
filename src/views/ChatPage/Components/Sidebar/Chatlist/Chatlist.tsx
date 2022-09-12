import React, { useContext } from 'react';
import { ChatContext } from '../../../../../hooks/ChatContext';
import { User } from '../../../../../types/Types';
import { ChatItem } from '../ChatItem/ChatItem';
import { ChatListHeader, Container } from './ChatList.styled';

type ChatListProps = {
  searchedUsers: User[];
};

const ChatList = ({ searchedUsers }: ChatListProps) => {
  const { messages } = useContext(ChatContext);

  return (
    <Container>
      <ChatListHeader>Chats</ChatListHeader>
      {searchedUsers.map((user, id) => {
        const specificUserMessages = messages.filter((message) => message.chatId === user.id);
        return (
          <ChatItem key={id} specificUser={user} specificUserMessages={specificUserMessages} />
        );
      })}
    </Container>
  );
};

export { ChatList };
