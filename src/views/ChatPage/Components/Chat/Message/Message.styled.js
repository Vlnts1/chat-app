import styled from 'styled-components';

export const MessageContainer = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  margin-top: 5px;
  padding: 10px 0px 20px 20px;
  @media (max-width: 768px) {
    flex-direction: column;
`;
export const MessageBox = styled.div`
  display: flex;
`;
export const MessageDate = styled.div`
  font-size: 12px;
  padding-left: 55px;
  font-family: 'Open-Sans', sans-serif;
`;
export const ReceiverAvatar = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 100%;
  object-fit: cover;
  margin-right: 10px;
`;
export const MessageText = styled.div`
  color: white;
  padding: 10px;
  border-radius: 20px;
  background: grey;
  max-width: 300px;
`;
