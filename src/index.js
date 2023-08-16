import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux';
import { store } from './redux';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
      <ToastContainer autoClose={1000} />
    </Provider>
  </BrowserRouter>
);
