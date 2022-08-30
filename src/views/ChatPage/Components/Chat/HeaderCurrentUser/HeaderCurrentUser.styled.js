import styled from 'styled-components';

export const Header = styled.div`
  background: rgb(248, 248, 248);
  display: flex;
  align-items: center;
  height: 100px;

  padding: 10px 20px;
  color: black;
  font-size: 30px;
  border: 1px solid rgb(238, 238, 238);
`;
export const Row = styled.div`
  display: flex;
`;
export const CurrentChatUserAvatar = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 100%;
`;
export const CurrentChatUserName = styled.h1`
  font-family: 'Open Sans', sans-serif;
  font-size: 1rem;
  color: rgb(67, 66, 66);
  padding-left: 5px;
  white-space: nowrap;
  overflow-x: hidden;
  text-overflow: ellipsis;
`;
