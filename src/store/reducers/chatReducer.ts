import { AnyAction } from 'redux';
import { ChatActionTypes, ChatState } from '../../types/Types';

const initialState: ChatState = {
  chats: [],
  messages: [],
  selectedChatId: 1,
};

export const ChatReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case ChatActionTypes.FETCH_CHATS:
      return { ...state, chats: [...state.chats, ...action.payload] };
    case ChatActionTypes.SET_SELECTED_CHAT_ID:
      return {
        ...state,
        selectedChatId: action.payload,
      };
    case ChatActionTypes.LOAD_MESSAGES:
      return {
        ...state,
        messages: [...state.messages, ...action.payload],
      };
    default: {
      return {
        ...state,
      };
    }
  }
};
