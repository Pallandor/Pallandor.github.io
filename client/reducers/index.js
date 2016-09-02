import { combineReducers } from 'redux';

import * as constants from '../constants';

// should change from array to map/obj
const INITIAL_STATE = []; // of articles

const articlesReducer = (state, action) => {
  switch (action.type) {
    case constants.FETCH_ARTICLES_SUCCESS:
      return [
      ...state,
      // working here...
      ];
  }
}

const rootReducer = combineReducers({
  // routing: routerReducer,
  // add additional reducers here
});

export default rootReducer;
