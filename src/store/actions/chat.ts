import axios from 'axios';
import { Dispatch } from 'redux';
import { ChatAction, ChatActionTypes } from '../../types/Types';

export const fetchChats = () => {
  return async (dispatch: Dispatch<ChatAction>) => {
    try {
      dispatch({ type: ChatActionTypes.FETCH_CHATS });
      const response = await axios.get('https://my-json-server.typicode.com/Vlnts1/chat-app/db');
      dispatch({ type: ChatActionTypes.FETCH_CHATS_SUCCESS, payload: response.data });
    } catch (e) {
      dispatch({ type: ChatActionTypes.FETCH_CHATS_ERROR, payload: 'fetch error' });
    }
  };
};
