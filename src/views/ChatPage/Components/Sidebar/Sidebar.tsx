import React, { useContext, useEffect, useState } from 'react';
import { ChatList } from './Chatlist/Chatlist';
import { ChatSearch } from './ChatSearch/ChatSearch';
import { AuthUserHeader } from './AuthUserHeader/AuthUserHeader';
import { Container, Col } from './Sidebar.styled';
import { ChatContext } from '../../../../hooks/ChatContext';
import { User } from '../../../../types/Types';
import { useTypedSelector } from '../../../../hooks/useTypedSelector';
import { fetchChats } from '../../../../store/actions/chat';
import { useDispatch } from 'react-redux';

const Sidebar = () => {
  const { chats } = useTypedSelector((state) => state.chat);
  console.log(chats);
  const [search, setSearch] = useState<string>('');
  const { users } = useContext(ChatContext);
  const [searchedUsers, setSearchedUsers] = useState<User[]>(users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchChats());
  }, []);

  useEffect(() => {
    setSearchedUsers(
      users.filter((user) => user.name.toLowerCase().includes(search.toLowerCase())),
    );
  }, [search, users]);

  return (
    <Container>
      <Col>
        <AuthUserHeader />
        <ChatSearch search={search} setSearch={setSearch} />
      </Col>
      <ChatList searchedUsers={searchedUsers} />
    </Container>
  );
};

export { Sidebar };
