import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { App } from './App';
import { store } from './store/store';
import { ChatProvider } from './hooks/ChatContext';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ChatProvider>
          <Routes>
            <Route path="*" element={<Navigate to="/chats/1" replace />} />
            <Route path="/chats/:id" element={<App />} />
          </Routes>
        </ChatProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
);
