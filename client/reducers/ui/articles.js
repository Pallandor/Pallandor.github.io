import * as constants from '../../constants';

const INITIAL_STATE = {
  loading: false,
};

// articles ui reducer
const articles = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case constants.FETCH_ARTICLES_PENDING:
      return {
        ...state,
        loading: true,
      };
    case constants.FETCH_ARTICLES_SUCCESS:
    case constants.FETCH_ARTICLES_ERROR:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default articles;

export const getArticlesLoadingState = state => state.ui.articles.loading;
