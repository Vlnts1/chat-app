import React from 'react';
import { Container, Input } from './ChatSearch.styled';

type SearchProps = {
  search: string;
  setSearch: (search: string) => void;
};

const ChatSearch = ({ search, setSearch }: SearchProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  return (
    <Container>
      <Input
        value={search}
        onChange={handleChange}
        type="text"
        placeholder="Search or start new chat"
      />
    </Container>
  );
};

export { ChatSearch };
