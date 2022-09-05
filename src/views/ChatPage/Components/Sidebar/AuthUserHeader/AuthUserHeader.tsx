import React from 'react';
import { AuthUserAvatar, Header, Col } from './AuthUserHeader.styled';

const AuthUserHeader = () => {
  return (
    <Header>
      <Col>
        <AuthUserAvatar
          src="https://cdn-icons-png.flaticon.com/512/6997/6997660.png"
          alt="Auth User Avatar"
        />
      </Col>
    </Header>
  );
};

export { AuthUserHeader };
