import React from 'react';

// should props.children be <props.children /> ??

const App = props => (
  <div>
    <nav>
      <a href="/html/">HTML</a>
      <a href="/css/">CSS</a>
      <a href="/js/">JavaScript</a>
      <a href="/jquery/">jQuery</a>
    </nav>
    {props.children} 
  </div>
);

export default App;
