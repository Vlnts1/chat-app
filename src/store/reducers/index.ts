import { combineReducers } from 'redux';
import { ChatReducer } from './chatReducer';

export const rootReducer = combineReducers({
  chat: ChatReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
