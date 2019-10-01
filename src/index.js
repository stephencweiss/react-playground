import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './app';
import configureStore from './store/store';

const store = configureStore();

store.subscribe(() => console.log('todos updated', store.getState()));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('React-App'),
);
