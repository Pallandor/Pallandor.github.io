import React from 'react';
import Spinner from 'react-spinkit';

const Loading = () => (
  <div className={styles.header}>
    <Spinner spinnerName="three-bounce" noFadeIn />
  </div>
);

const styles = {
  header: 'tc pv6 pv6-ns',
  h1: 'f5 f4-ns fw6 mid-gray',
};

export default Loading;
