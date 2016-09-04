import { combineReducers } from 'redux';

import articles from './articles';

const rootReducer = combineReducers({
  articles,
  // add reducers here
});

export default rootReducer;
