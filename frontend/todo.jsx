import React from 'react';
import ReactDOM from 'react-dom';
import Root from './component/root';
import configureStore from './Store/store.js';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  window.store = store;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});
