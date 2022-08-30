import React from 'react';
import { AuthAvatar, Header, Row } from './HeaderAuthUser.styled';

const HeaderAuthUser = () => {
  return (
    <Header>
      <Row>
        <AuthAvatar src="https://cdn-icons-png.flaticon.com/512/6997/6997660.png" alt="" />
      </Row>
    </Header>
  );
};

export { HeaderAuthUser };
