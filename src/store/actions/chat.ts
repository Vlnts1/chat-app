import { ChatActionTypes, Message, User } from '../../types/Types';

export const setSelectedChatIdAction = (payload: string) => ({
  type: ChatActionTypes.SET_SELECTED_CHAT_ID,
  payload,
});

export const loadChatsAction = (payload: User[]) => ({
  type: ChatActionTypes.FETCH_CHATS,
  payload,
});

export const loadMessagesAction = (payload: Message[]) => ({
  type: ChatActionTypes.LOAD_MESSAGES,
  payload,
});


export const addNewMessages = (payload: Message[]) => ({
  type: ChatActionTypes.ADD_MESSAGES,
  payload,
});
