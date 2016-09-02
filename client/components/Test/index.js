import React from 'react';

const Test = props => (
  <div>
  Inside Test Component, with children as: {props.caption}
  {props.children}
  </div>
);

// props validation!

export default Test;