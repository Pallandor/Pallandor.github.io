import React from 'react';
import { IndexRoute, Route } from 'react-router';

import App from '../components/App';
import HomePage from '../containers/HomePage';
import AboutPage from '../components/AboutPage';

import ArticleList from '../components/ArticleList';
import CompleteArticle from '../components/CompleteArticle';

export default (
<Route path='/' component={ App }>
  <Route component={ HomePage }>
    <IndexRoute component={ ArticleList } />
    <Route path='articles/:id' component={ CompleteArticle } />
  </Route>
  <Route path='about' component={ AboutPage } />
</Route>
);
