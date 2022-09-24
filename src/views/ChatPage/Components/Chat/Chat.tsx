import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ChatContext } from '../../../../hooks/ChatContext';
import { Message, User } from '../../../../types/Types';
import { Container, Col } from './Chat.styled';
import { ChatInput } from './ChatInput/ChatInput';
import { CurrentUserHeader } from './CurrentUserHeader/CurrentUserHeader';
import { MessageList } from './MessageList/MessageList';

const Chat = () => {
  const [activeUser, setActiveUser] = useState<User>({} as User);
  const [currentMessages, setCurrentMessages] = useState<Message[]>([]);

  const { users, messages } = useContext(ChatContext);
  const { id } = useParams();

  useEffect(() => {
    setActiveUser(users.find((user) => user.id === id) || ({} as User));
    setCurrentMessages([...messages].filter((message) => message.chatId === id));
  }, [id, messages, users]);

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
