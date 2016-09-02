import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
// import { Router, browserHistory } from 'react-router';
// import { syncHistoryWithStore } from 'react-router-redux';

import routes from '../../routes';
import configureStore from '../../store/configureStore';

const store = configureStore({'beginning': 'lololol'});
// const history = syncHistoryWithStore(browserHistory, store);

const Root = () => (
  <Provider store={ store }>
    <Router>
      {routes}
    </Router>
  </Provider>
);

export default Root;
