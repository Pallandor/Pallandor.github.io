import React from 'react';

import NavBar from '../NavBar'

// should props.children be <props.children /> ??

const App = ({ children }) => (
  <div>
    <NavBar />
    {children}
    <div className="ui secondary pointing menu">
      <a className="active item">
        Home
      </a>
      <a className="item">
        Messages
      </a>
      <a className="item">
        Friends
      </a>
      <div className="right menu">
        <a className="ui item">
          Logout
        </a>
      </div>
    </div>
  </div>
);

App.propTypes = {
  children: React.PropTypes.node,
};

export default App;
