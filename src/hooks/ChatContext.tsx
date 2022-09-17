import React, { createContext, FC, useEffect, useState } from 'react';
import axios from 'axios';
import { ChatsData, Chats, Message, User } from '../types/Types';

export const ChatContext = createContext<Chats>({
  messages: [],
  users: [],
  activeUser: '1',
  setActiveUser: () => {},
  updateMessages: () => {},
});

type ChatProviderProps = {
  children: React.ReactNode;
};

export const ChatProvider: FC<ChatProviderProps> = ({ children }) => {
  const [users, setUsers] = useState<User[]>([]);
  const [activeUser, setActiveUser] = useState<string>('1');
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    axios
      .get<ChatsData>('https://my-json-server.typicode.com/Vlnts1/chat-app/db')
      .then((res) => res.data)
      .then((data) => {
        setUsers(data.users);
        setMessages(data.messages);
      });
  }, []);

  const updateMessages = (message: Message) => {
    setMessages((prevMessages) => {
      return [...prevMessages, message];
    });
  };
  return (
    <ChatContext.Provider value={{ users, messages, updateMessages, activeUser, setActiveUser }}>
      {children}
    </ChatContext.Provider>
  );
};
