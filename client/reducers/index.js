import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'

import ui from './ui';
import articles from './articles';

const rootReducer = combineReducers({
  routing: routerReducer,
  ui,
  articles,
  // add reducers here
});

export default rootReducer;
