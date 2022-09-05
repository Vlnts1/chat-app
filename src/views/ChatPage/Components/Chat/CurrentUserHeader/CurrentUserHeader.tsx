import React from 'react';
import {
  CurrentChatUserAvatar,
  CurrentChatUserName,
  Header,
  Row,
} from './CurrentUserHeader.styled';

const CurrentUserHeader = () => {
  return (
    <Header>
      <Row>
        <CurrentChatUserAvatar
          src="https://cdn-icons-png.flaticon.com/512/6997/6997660.png"
          alt="User Avatar"
        />
        <CurrentChatUserName>Josefina</CurrentChatUserName>
      </Row>
    </Header>
  );
};

export { CurrentUserHeader };
