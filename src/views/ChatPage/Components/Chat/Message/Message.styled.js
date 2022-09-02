import styled from 'styled-components';

export const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 0px 15px 20px;

  @media (max-width: 768px) {
    flex-direction: column;
`;

export const MessagesCol = styled.div`
  display: flex;
  flex-direction: column;

  align-items: ${(props) => {
    return props.myMessage ? 'flex-end' : 'flex-start';
  }};
`;

export const MessageBox = styled.div`
  display: flex;
  padding: ${(props) => {
    return props.myMessage ? '0px 25px;' : '5px 5px;';
  }};
`;

export const MessageDate = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 12px;
  font-family: 'Open-Sans', sans-serif;

  color: ${(props) => {
    return props.theme.colors.black;
  }};

  align-items: ${(props) => {
    return props.myMessage ? 'flex-end' : 'flex-start';
  }};

  padding: ${(props) => {
    return props.myMessage ? '5px 25px;' : '5px 50px;';
  }};
`;

export const ReceiverUserAvatar = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 100%;
  object-fit: cover;
  margin-right: 10px;
`;

export const MessageText = styled.div`
  font-family: 'Open Sans', sans-serif;
  font-size: 15px;
  padding: 10px;
  border-radius: 20px;
  max-width: 500px;

  color: ${(props) => {
    return props.theme.colors.white;
  }};

  background-color: ${(props) => {
    return props.myMessage ? props.theme.colors.gray : props.theme.colors.dimgray;
  }};

 @media (max-width: 768px) {
    flex-direction: column;
    max-width: 500px;

`;
