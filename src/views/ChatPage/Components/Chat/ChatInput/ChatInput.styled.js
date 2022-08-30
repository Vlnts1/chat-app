import styled from 'styled-components';

export const Container = styled.div`
  background: rgb(248, 248, 248);
  position: relative;
  display: block;
  height: 140px;
  box-sizing: border-box;
  padding: 25px;
  text-align: center;
  margin-top: 10px;
  @media (max-width: 768px) {
    flex-direction: column;
`;

export const Input = styled.input`
  width: 90%;
  outline: none;
  border: 1px solid rgb(238, 238, 238);
  background: #fff;
  padding: 20px;
  border-radius: 20px;
  font-size: 14px;
`;
