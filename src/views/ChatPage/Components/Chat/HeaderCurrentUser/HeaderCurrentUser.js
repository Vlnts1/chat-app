import React from 'react';
import {
  CurrentChatUserAvatar,
  CurrentChatUserName,
  Header,
  Row,
} from './HeaderCurrentUser.styled';

const HeaderCurrentUser = () => {
  return (
    <Header>
      <Row>
        <CurrentChatUserAvatar
          src="https://cdn-icons-png.flaticon.com/512/6997/6997660.png"
          alt=""
        />
        <CurrentChatUserName>Josefina</CurrentChatUserName>
      </Row>
    </Header>
  );
};

export { HeaderCurrentUser };
