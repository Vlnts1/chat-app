import styled from 'styled-components';

export const Container = styled.div`
  border: 1px solid rgb(238, 238, 238);
  height:490px;
  overflow:auto;
  padding: 0px 0px 50px 0px;
  @media (max-width: 768px) {
    flex-direction: column;
`;
export const ChatListHeader = styled.h2`
  font-weight: lighter;
  font-family: 'Open Sans', sans-serif;
  padding-left: 15px;
  color: rgb(95, 191, 246);
  margin: 10% auto;
`;
