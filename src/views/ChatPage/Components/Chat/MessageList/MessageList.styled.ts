import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column-reverse;
  height: 70vh;
  width: 100%;
  overflow: auto;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
