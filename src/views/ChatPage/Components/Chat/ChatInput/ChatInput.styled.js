import styled from 'styled-components';

export const Container = styled.div`
  background: rgb(248, 248, 248);
  position: relative;
  display: flex; 
  height: 20vh;
  box-sizing: border-box;
  padding: 25px;
  text-align: center;
  @media (max-width: 768px) {
    flex-direction: column;
`;

export const Input = styled.input`
  width: 100%;
  height: 2vh;
  outline: none;
  border: 1px solid rgb(238, 238, 238);
  background: #fff;
  padding: 25px;
  border-radius: 20px;
  font-size: 14px;
`;
