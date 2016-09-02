import { combineReducers } from 'redux';

const someReducer = (state, action) => {
  switch (action.type) {
    // add variants here
    default:
      return state;
  }
}
// import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  // routing: routerReducer,
  // add additional reducers here
});

export default rootReducer;
