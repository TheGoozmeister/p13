import React from 'react';
import ReactDOM from 'react-dom/client';
import "../src/css/main.css"
import AppRouter from './components/Router/Router';
import { Provider } from 'react-redux';
import store from './store/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <AppRouter />
    </React.StrictMode>
  </Provider>
);

