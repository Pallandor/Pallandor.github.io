import React from 'react';
import { Link } from 'react-router';

// should props.children be <props.children /> ??

const NavBar = () => (
  <div>
    <nav>
      <Link to={'/'}>Home</Link>
      <Link to={'about'}>About</Link>
    </nav>
  </div>
);

export default NavBar;
