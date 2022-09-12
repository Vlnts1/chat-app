import React, { useContext, useEffect, useState } from 'react';
import { ChatList } from './Chatlist/Chatlist';
import { ChatSearch } from './ChatSearch/ChatSearch';
import { AuthUserHeader } from './AuthUserHeader/AuthUserHeader';
import { Container, Col } from './Sidebar.styled';
import { ChatContext } from '../../../../hooks/ChatContext';
import { User } from '../../../../types/Types';

const Sidebar = () => {
  const [search, setSearch] = useState<string>('');
  const { users } = useContext(ChatContext);
  const [searchedUsers, setSearchedUsers] = useState<User[]>(users);

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
