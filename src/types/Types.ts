export type User = {
  id: string;
  name: string;
  avatar: string;
};

export type Message = {
  id: string;
  chatId: string;
  text: string;
  receiver: boolean;
  time: string;
};

export type Joke = {
  created_at: string;
  icon_url: string;
  id: string;
  updated_at: string;
  url: string;
  value: string;
};

export type ChatState = {
  chats: User[];
  messages: Message[];
  selectedChatId: number;
};

export enum ChatActionTypes {
  LOAD_MESSAGES = 'LOAD_MESSAGES',
  FETCH_CHATS = 'FETCH_CHATS',
  SET_SELECTED_CHAT_ID = 'SET_SELECTED_CHAT_ID',
  ADD_MESSAGES = 'ADD_MESSAGES',
}
