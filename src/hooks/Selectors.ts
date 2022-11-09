import { ChatState } from '../types/Types';

export const getChatsSelector = (state: ChatState) => state.chats;
export const getSelectedChatIdSelector = (state: ChatState) => state.selectedChatId;
export const getMessagesSelector = (state: ChatState) => state.messages;
