import React from 'react';
import ReactDOM from 'react-dom/client';

import { Provider } from 'react-redux';
import App from './App';
import store from './store/store';
import './index.css';

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);
root.render(
  <Provider store={store} >
    <App />
  </Provider>
);
