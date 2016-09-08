import React from 'react';

const Loading = () => (
  <div className={styles.header}>
    <p className={styles.h1}>...Loading</p>
  </div>
);

const styles = {
  header: 'tc pv6 pv6-ns',
  h1: 'f5 f4-ns fw6 mid-gray',
};

export default Loading;
