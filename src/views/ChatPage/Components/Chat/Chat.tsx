import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getChatsSelector, getMessagesSelector } from '../../../../store/Selectors';
import { Message, User } from '../../../../types/Types';
import { Container, Col } from './Chat.styled';
import { ChatInput } from './ChatInput/ChatInput';
import { CurrentUserHeader } from './CurrentUserHeader/CurrentUserHeader';
import { MessageList } from './MessageList/MessageList';

const Chat = () => {
  const [activeUser, setActiveUser] = useState<User>({} as User);
  const [currentMessages, setCurrentMessages] = useState<Message[]>([]);

  const chats = useSelector(getChatsSelector);
  const messages = useSelector(getMessagesSelector);
  const { id } = useParams();

  useEffect(() => {
    setActiveUser(chats.find((user) => user.id === id) || ({} as User));
    setCurrentMessages([...messages].filter((message) => message.chatId === id));
  }, [id, messages, chats]);

  return (
    <Container>
      <CurrentUserHeader activeUser={activeUser} />
      <Col>
        <MessageList isMyMessage currentMessages={currentMessages} activeUser={activeUser} />
        <ChatInput />
      </Col>
    </Container>
  );
};

export { Chat };
