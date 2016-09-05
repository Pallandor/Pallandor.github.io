import * as api from '../api';
import * as constants from '../constants';

// thunks
  // can modify to accept arg e.g. number of latest articles.
export const fetchArticles = () => (dispatch, getState) => {
  dispatch({
    type: constants.FETCH_ARTICLES_PENDING,
  });

  api.fetchArticles()
    .then(articlesArr => {
      dispatch({
        type: constants.FETCH_ARTICLES_SUCCESS,
        articles: articlesArr, 
      });
    })
    .catch(err => {
      dispatch({
        type: constants.FETCH_ARTICLES_ERROR,
        message: err.message || 'Something went wrong',
      });
    });
};
