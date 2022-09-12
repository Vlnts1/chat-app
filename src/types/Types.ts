export type User = {
  id: number;
  name: string;
  avatar: string;
};

export type Message = {
  id: number;
  chatId: number;
  text: string;
  receiver: boolean;
  time: string;
};

export type Data = {
  users: User[];
  messages: Message[];
};

export type DataAction = Data & {
  updateMessages: (message: Message) => void;
};
