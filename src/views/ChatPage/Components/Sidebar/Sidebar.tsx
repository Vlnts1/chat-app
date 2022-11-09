import React, { useEffect, useState } from 'react';
import { ChatList } from './Chatlist/Chatlist';
import { ChatSearch } from './ChatSearch/ChatSearch';
import { AuthUserHeader } from './AuthUserHeader/AuthUserHeader';
import { Container, Col } from './Sidebar.styled';
import { getChatsSelector } from '../../../../hooks/Selectors';
import { loadChatsAction, loadMessagesAction } from '../../../../store/actions/chat';
import { useDispatch } from 'react-redux';
import { getChats, getMessages } from '../../../../api/getChats';
import { useSelector } from 'react-redux';

const Sidebar = () => {
  const [search, setSearch] = useState<string>('');
  const chats = useSelector(getChatsSelector);

  const dispatch = useDispatch();

  useEffect(() => {
    const loadDataFromServer = async () => {
      const responseChats = await getChats();
      const responseMessages = await getMessages();

      dispatch(loadMessagesAction(responseMessages));
      dispatch(loadChatsAction(responseChats));
    };

    loadDataFromServer();
  }, []);

  const searchedUsers = chats.filter((chat) => {
    return chat.name.toLowerCase().includes(search.toLowerCase());
  });

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
