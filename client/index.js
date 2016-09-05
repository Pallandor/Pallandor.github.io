import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, hashHistory } from 'react-router'; 

import routes from './routes';
import configureStore from './store/configureStore';

const store = configureStore({});

ReactDOM.render(
  <Provider store={ store }>
    <Router history={hashHistory}>
      {routes}
    </Router>
  </Provider>,
  document.getElementById('root')
);