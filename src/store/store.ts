import { createStore } from 'redux';
import { ChatReducer } from './reducers/chatReducer';

export const store = createStore(ChatReducer);

export type AppDispatch = typeof store.dispatch;
