type User = {
  id: number;
  name: string;
  avatar: string;
};

type Messages = {
  id: number;
  chatId: number;
  text: string;
  receiver: boolean;
  createdDate: string;
};

export const chats: Array<{ user: User; messages: Array<Messages> }> = [
  {
    messages: [
      {
        id: 1,
        chatId: 1,
        text: 'We are losing money quick',
        receiver: true,
        createdDate: '2017-02-18T13:37:27+00:00',
      },
    ],
    user: {
      id: 1,
      name: 'Josefina',
      avatar: 'https://cdn-icons-png.flaticon.com/512/6997/6997660.png',
    },
  },
  {
    messages: [
      {
        id: 2,
        chatId: 2,
        text: 'You are the worst',
        receiver: true,
        createdDate: '2017-06-12T13:37:27+00:00',
      },
    ],
    user: {
      id: 2,
      name: 'Alice Freeman',
      avatar: 'https://cdn-icons-png.flaticon.com/512/6997/6997589.png',
    },
  },
  {
    messages: [
      {
        id: 3,
        chatId: 3,
        text: 'Quickly come to the meeting room...',
        receiver: true,
        createdDate: '2017-03-18T13:37:27+00:00',
      },
    ],
    user: {
      id: 3,
      name: 'Velazquez',
      avatar: 'https://cdn-icons-png.flaticon.com/512/6998/6998058.png',
    },
  },
];
