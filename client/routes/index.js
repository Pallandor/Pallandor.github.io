import React from 'react';
import { IndexRoute, Route } from 'react-router';

import App from '../components/App';
import HomePage from '../containers/HomePage';
import AboutPage from '../components/AboutPage';

export default (
  <Route path="/" component={ App }>
    <IndexRoute component={ HomePage }/>
    <Route path="about" component={ AboutPage }/>
  </Route>
);
