import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 450px;
  width:100%;
  overflow: auto;
  margin-top: 20px;
  margin-bottom: 10px;

  flex-direction: column-reverse;
  @media (max-width: 768px) {
    flex-direction: column;
`;
