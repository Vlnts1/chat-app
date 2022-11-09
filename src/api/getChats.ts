export const getChats = async () => {
  const response = await fetch('https://my-json-server.typicode.com/vlnts1/chat-app/users');
  const res = await response.json();
  return res;
};

export const getMessages = async () => {
  const response = await fetch('https://my-json-server.typicode.com/vlnts1/chat-app/messages');
  const result = await response.json();

  return result;
};
