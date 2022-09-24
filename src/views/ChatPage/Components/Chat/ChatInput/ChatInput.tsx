import React, { ChangeEvent, FC, KeyboardEvent, useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getRandomJoke } from '../../../../../api/getRandomJoke';
import { ChatContext } from '../../../../../hooks/ChatContext';
import { Message } from '../../../../../types/Types';
import { Container, Input } from './ChatInput.styled';

const ChatInput: FC = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const { updateMessages } = useContext(ChatContext);
  const { id } = useParams() as {
    id: string;
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

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleEnterPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      updateMessages(sendMessage(inputValue));
      getRandomJoke().then((joke) => {
        setTimeout(() => {
          updateMessages(sendMessage(joke, true));
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
