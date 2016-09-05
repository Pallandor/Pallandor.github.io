import { combineReducers } from 'redux';

import articles from './articles';

// looks like: state.ui.articles.
const uiReducer = combineReducers({
  articles,
  // add reducers here
});

export default uiReducer;
