import styled from 'styled-components';

export const ContainerChatItem = styled.div`
  color: rgb(67, 66, 66);
  font-size: 1.3rem;
  border-bottom: 1px solid #dee0e2;
  padding: 20px 5px 20px 5px;
  display: flex;
  cursor: pointer;

  &:hover {
    background-color: rgb(231, 231, 231);
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ImageCol = styled.div`
  position: relative;
  width: 30%;
  display: flex;
  justify-content: center;
`;

export const OnlineIndicator = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  position: relative;
  top: 30px;
  right: 10px;

  background-color: ${(props) => {
    return props.theme.colors.green;
  }};
`;

export const DetailsCol = styled.div`
  position: relative;
  width: 100%;
`;

export const ChatListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
  padding-left: 5px;
`;

export const ChatMessageCol = styled.div`
  position: relative;
  padding-left: 5px;
  width: 100%;
`;

export const UserChatAvatar = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 100%;
`;

export const ChatTitle = styled.div`
  font-family: 'Open-Sans', sans-serif;
  color: rgb(67, 66, 66);
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
`;

export const ChatCreatedDate = styled.div`
  white-space: nowrap;
  font-size: 1rem;
`;

export const ChatLastMessage = styled.div`
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  line-height: 1em;
`;
