import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column-reverse;
  height: 450px;
  width: 100%;
  overflow: auto;
  margin-top: 10px;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
