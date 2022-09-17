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
