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

export type ChatsData = {
  users: User[];
  messages: Message[];
};

export type Chats = ChatsData & {
  updateMessages: (message: Message) => void;
  activeUser: string;
  setActiveUser: (id: string) => void;
};

export type ChatState = {
  chats: User[] & Message[];
  error: null | string;
};

export enum ChatActionTypes {
  FETCH_CHATS = 'FETCH_CHATS',
  FETCH_CHATS_SUCCESS = 'FETCH_CHATS_SUCCESS',
  FETCH_CHATS_ERROR = 'FETCH_CHATS_ERROR',
}

export type FetchChatAction = {
  type: ChatActionTypes.FETCH_CHATS;
};

export type FetchChatSuccessAction = {
  type: ChatActionTypes.FETCH_CHATS_SUCCESS;
  payload: User[] & Message[];
};

export type FetchChatErrorAction = {
  type: ChatActionTypes.FETCH_CHATS_ERROR;
  payload: string;
};

export type ChatAction = FetchChatAction | FetchChatErrorAction | FetchChatSuccessAction;
