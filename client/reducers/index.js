import { combineReducers } from 'redux';

import ui from './ui';
import articles from './articles';

const rootReducer = combineReducers({
  ui,
  articles,
  // add reducers here
});

export default rootReducer;
