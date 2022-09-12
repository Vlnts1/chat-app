import React, { createContext, FC, useEffect, useState } from 'react';
import axios from 'axios';
import { Data, DataAction, Message, User } from '../types/Types';

export const ChatContext = createContext<DataAction>({
  messages: [],
  users: [],
  updateMessages: () => {},
});
type ChatProviderProps = {
  children: React.ReactNode;
};
export const ChatProvider: FC<ChatProviderProps> = ({ children }) => {
  const [users, setUsers] = useState<User[]>([]);
  const [messages, setMessages] = useState<Message[]>([]);
  useEffect(() => {
    axios
      .get<Data>(String('https://my-json-server.typicode.com/Vlnts1/chat-app/db'))
      .then((res) => {
        return res.data;
      })
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
    <ChatContext.Provider value={{ users, messages, updateMessages }}>
      {children}
    </ChatContext.Provider>
  );
};
