import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
// import { Router, browserHistory } from 'react-router';

import routes from './routes';
import configureStore from './store/configureStore';

const store = configureStore({'beginning': 'lololol'});

ReactDOM.render(
  <Provider store={ store }>
    <Router>
      {routes}
    </Router>
  </Provider>,
  document.getElementById('root')
);