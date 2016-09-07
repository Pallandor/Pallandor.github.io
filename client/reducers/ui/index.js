import { combineReducers } from 'redux';

import articles from './articles';

const uiReducer = combineReducers({
  articles,
  // add reducers here
});

export default uiReducer;
