import React, { FC } from 'react';
import { User } from '../../../../../types/Types';
import {
  CurrentChatUserAvatar,
  CurrentChatUserName,
  Header,
  Row,
} from './CurrentUserHeader.styled';

type CurrentUserAvatarProps = {
  activeUser: User;
};

const CurrentUserHeader: FC<CurrentUserAvatarProps> = ({ activeUser }) => {
  return (
    <Header>
      <Row>
        <CurrentChatUserAvatar src={activeUser.avatar} alt="User Avatar" />
        <CurrentChatUserName>{activeUser.name}</CurrentChatUserName>
      </Row>
    </Header>
  );
};

export { CurrentUserHeader };
