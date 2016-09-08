import React from 'react';
import { Link } from 'react-router';

const NavBar = () => (
  <div>
    <nav className={styles.nav}>
    <Link className={styles.leftLink} to={'/'}>Home</Link>
      <div className={styles.rightContainer}>
        <Link className={styles.rightLink} to={'/'}>Articles</Link>
        <Link className={styles.rightLink} to={'about'}>About</Link>
        <Link className={styles.rightLink} to={'about'}>Github</Link>
        <Link className={styles.lastRightLink} to={'contact'}>Contact</Link>
      </div>
    </nav>
  </div>
);

// Tachyon styles
const styles = {
  nav: 'dt w-100 border-box pa3 ph5-ns',
  rightContainer: 'dtc v-mid w-75 tr',
  leftLink: 'dtc v-mid link dim w-25 black b',
  rightLink: 'link dim dark-gray f6 f5-ns dib mr3 mr4-ns',
  lastRightLink: 'link dim dark-gray f6 f5-ns dib',
};

export default NavBar;
