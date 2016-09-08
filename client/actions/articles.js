import * as api from '../api';
import * as constants from '../constants';
import * as util from '../util';

// thunks
export const fetchArticles= () => (dispatch, getState) => {
  dispatch({
    type: constants.FETCH_ARTICLES_PENDING,
  });

  // TODO: migrate bgColor state to ui reducer (only if easy to reason)
  // NOTE: colours may not persist uniquely to each article as set by ind not UUID
  const injectBackgroundColours = articlesArray =>
    articlesArray.map((article, ind) => ({
      ...article,
      bgColour: util.setBgColourByNumber(ind),
    }));

  api.fetchArticles()
    .then(articlesArr => {
      dispatch({
        type: constants.FETCH_ARTICLES_SUCCESS,
        articles: injectBackgroundColours(articlesArr),
      });
    })
    .catch(err => {
      dispatch({
        type: constants.FETCH_ARTICLES_ERROR,
        message: err.message || 'Something went wrong',
      });
    });
};
