import * as constants from '../constants';

const INITIAL_STATE = [];

const articlesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case constants.FETCH_ARTICLES_SUCCESS:
      return action.articles;
    default:
      return state;
  }
}

export default articlesReducer;

export const getArticles = state => state.articles;