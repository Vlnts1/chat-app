import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: block;
  flex-direction: column;
  min-height: 100vh;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Col = styled.div`
  border: 1px solid rgb(238, 238, 238);
`;
