import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

import rootReducer from '../reducers';

const _getMiddleware = () => {
  let middleware = [
    thunk,
  ];

  if (__DEV__) {
    const logger = createLogger();
    middleware = [...middleware, logger];
  }

  return applyMiddleware(...middleware);
}

const configureStore = initialState => {
  const store = createStore(
    rootReducer,
    initialState,
    _getMiddleware()
  );
  return store;
}

export default configureStore;
