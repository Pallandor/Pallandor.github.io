import React from 'react';
import { Link } from 'react-router';

// should props.children be <props.children /> ??

const App = props => (
  <div>
{/* extract below out as a sep NavBar Component */ }
    <nav>
      <a href="#"><Link to={'about'}>Go to About Page</Link></a>
      <a href="/css/">CSS</a>
      <a href="/js/">JavaScript</a>
      <a href="/jquery/">jQuery</a>
    </nav>
    {props.children} 
  </div>
);

export default App;
