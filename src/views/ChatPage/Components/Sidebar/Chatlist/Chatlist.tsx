import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { getMessagesSelector } from '../../../../../store/Selectors';
import { User } from '../../../../../types/Types';
import { ChatItem } from '../ChatItem/ChatItem';
import { ChatListHeader, Container } from './ChatList.styled';

type ChatListProps = {
  searchedUsers: User[];
};

const ChatList = ({ searchedUsers }: ChatListProps) => {
  const messages = useSelector(getMessagesSelector);

  const chats = useMemo(() => {
    const usersWithLastMessageDate = searchedUsers.map((user) => {
      const specificUserMessages = messages.filter((message) => message.chatId === user.id);

      return {
        lastMessageDate: specificUserMessages[specificUserMessages.length - 1].time,
        user,
        messages: specificUserMessages,
      };
    });

    const sortedChats = usersWithLastMessageDate
      .sort((a, b) => new Date(b.lastMessageDate).getTime() - new Date(a.lastMessageDate).getTime())
      .map((chat) => {
        return {
          lastMessageDate: chat.lastMessageDate,
          user: chat.user,
          messages: chat.messages,
        };
      });

    return sortedChats;
  }, [searchedUsers, messages]);

  return (
    <Container>
      <ChatListHeader>Chats</ChatListHeader>
      {chats.map(({ user, messages }) => {
        return <ChatItem key={user.id} specificUser={user} specificUserMessages={messages} />;
      })}
    </Container>
  );
};

export { ChatList };
