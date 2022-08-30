import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  @media (max-width: 768px) {
    flex-direction: column;
`;
export const Row = styled.div`
  display: flex;
  flex-direction: column;
`;
export const MessageListCollumn = styled.div``;
export const ChatInputCollumn = styled.div``;
