import React from 'react';

export const convertDateToString = dateObj => {
  let mm = dateObj.getMonth() + 1;
  let dd = dateObj.getDate();
  dd = [!dd[1] && '0', dd].join('');
  mm = [!mm[1] && '0', mm].join('');
  return [dd, mm, dateObj.getFullYear()].join('/');
};


// shallow injection (one child deep)
export const injectReactChildrenWithProps = (childComponents, propsToInject) =>
  React.Children.map(childComponents, child =>
    React.cloneElement(
      child,
      propsToInject, // shallow merge to existing props obj, so care!
    ));

// tachyon bg color setter
export const setBgColourByNumber = num => num % 2 === 0 ? 'bg-washed-green': 'bg-washed-yellow';
