import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './app';
import configureStore from './store/store';
import { Auth0Provider } from './Auth/Auth0Context';

import config from './Auth/auth_config.json';

// A function that routes the user to the right place
// after login
const onRedirectCallback = appState => {
  console.log({ appState });
  window.history.replaceState(
    {},
    document.title,
    appState && appState.targetUrl ? appState.targetUrl : window.location.pathname,
  );
};

const store = configureStore();

store.subscribe(() => console.log('todos updated', store.getState()));

ReactDOM.render(
  <Auth0Provider
    domain={config.domain}
    client_id={config.clientId}
    redirect_uri={window.location.origin}
    onRedirectCallback={onRedirectCallback}
  >
    <Provider store={store}>
      <App />
    </Provider>
  </Auth0Provider>,
  document.getElementById('React-App'),
);
