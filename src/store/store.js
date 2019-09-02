
import { createStore } from 'redux';
import toDos from '../reducers';
import * as actionCreators from '../actions';

export default function configureStore(preloadedState) {

  // use Redux Devtools Extensaion
  const enhancer = window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__({ actionCreators, serialize: true, trace: true });
  if (!enhancer) {
    console.warn('Install Redux DevTools Extension to inspect the app state: ' +
      'https://github.com/zalmoxisus/redux-devtools-extension#installation')
  }

  const store = createStore(toDos, preloadedState, enhancer);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      store.replaceReducer(require('../reducers').default)
    });
  }

  return store;
}