import React, { ChangeEvent, FC, KeyboardEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getRandomJoke } from '../../../../../api/getRandomJoke';
import { addNewMessages } from '../../../../../store/actions/chat';
import { Message } from '../../../../../types/Types';
import { Container, Input } from './ChatInput.styled';

const ChatInput: FC = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const { id } = useParams() as {
    id: string;
  };

  const dispatch = useDispatch();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const sendMessage = (text: string, receiver = false): Message => {
    return {
      id: new Date().getDate().toLocaleString(),
      chatId: id,
      receiver,
      text,
      time: new Date().toISOString(),
    };
  };

  const handleEnterPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      dispatch(addNewMessages([sendMessage(inputValue)]));
      getRandomJoke().then((joke) => {
        setTimeout(() => {
          dispatch(addNewMessages([sendMessage(joke, true)]));
        }, 3000);
      });
      setInputValue('');
    }
  };

  return (
    <Container>
      <Input
        placeholder="Type your message..."
        value={inputValue}
        onChange={handleChange}
        onKeyUp={handleEnterPress}
      />
    </Container>
  );
};

export { ChatInput };
