import { applyMiddleware, compose, createStore, } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';
import * as actionCreators from '../actions';

export default function configureStore(initialState) {

  // composing middleware
  const finalCreateStore = compose(
    applyMiddleware(thunk),
    global.devToolsExtension ? global.devToolsExtension() : f => f)(createStore)

  const store = finalCreateStore(reducers, initialState);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      store.replaceReducer(require('../reducers').default)
    });
  }

  return store;
}