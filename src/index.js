import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { UserProvider } from './context/user.context';
import { AccountDropdownProvider } from './context/account-dropdown.context';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <UserProvider>
      <AccountDropdownProvider>
        <App />
      </AccountDropdownProvider>
    </UserProvider>
  </React.StrictMode>
);
