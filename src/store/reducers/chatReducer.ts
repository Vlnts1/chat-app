import { ChatAction, ChatActionTypes, ChatState } from '../../types/Types';

const initialState: ChatState = {
  chats: [],
  error: null,
};

export const ChatReducer = (state = initialState, action: ChatAction): ChatState => {
  switch (action.type) {
    case ChatActionTypes.FETCH_CHATS:
      return { error: null, chats: [] };
    case ChatActionTypes.FETCH_CHATS_SUCCESS:
      return { error: null, chats: action.payload };
    case ChatActionTypes.FETCH_CHATS_ERROR:
      return { error: action.payload, chats: [] };
    default:
      return state;
  }
};
