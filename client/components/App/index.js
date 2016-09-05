import React from 'react';
import { Link } from 'react-router';

// should props.children be <props.children /> ??

const App = props => (
  <div>
{/* extract below out as a sep NavBar Component */ }
    <nav>
      <a href="#"><Link to={'/'}>Home</Link></a>
      <a href="#"><Link to={'about'}>About</Link></a>
    </nav>
    {props.children} 
  </div>
);

export default App;
