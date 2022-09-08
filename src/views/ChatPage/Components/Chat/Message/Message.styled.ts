import styled from 'styled-components';

type IsMyMessageProps = {
  IsMyMessage: boolean;
};

export const MessageContainer = styled.div<IsMyMessageProps>`
  display: flex;
  flex-direction: column;
  padding: 10px 0px 15px 20px;

  .MessageText {
    background-color: ${(props) => {
    return props.IsMyMessage ? props.theme.colors.gray : props.theme.colors.dimgray;
  }};
  }

  .ReceiverUserAvatar {
    visibility: ${(props) => {
    return props.IsMyMessage ? 'hidden' : 'visible';
  }};
  }

  align-items: ${(props) => {
    return props.IsMyMessage ? 'flex-end' : 'flex-start';
  }};

  padding: ${(props) => {
    return props.IsMyMessage ? '0px 15px;' : '5px 5px;';
  }};

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const MessageBox = styled.div`
  display: flex;
  padding: 5px 10px;
`;

export const MessageDate = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 12px;
  font-family: 'Open-Sans', sans-serif;
  padding: 5px 25px;

  color: ${(props) => {
    return props.theme.colors.black;
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

  @media (max-width: 768px) {
    flex-direction: column;
    max-width: 500px;
  }
`;
