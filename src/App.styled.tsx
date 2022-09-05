import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

export const SidebarCol = styled.div`
  flex: 3.5;
`;
export const ChatCol = styled.div`
  flex: 7.5;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
