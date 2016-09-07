import React from 'react';

export const convertDateToString = dateObj => {
  let mm = dateObj.getMonth() + 1;
  let dd = dateObj.getDate();
  dd = [!dd[1] && '0', dd].join('');
  mm = [!mm[1] && '0', mm].join('');
  return [dd, mm, dateObj.getFullYear()].join('/');
};


// shallow injection (1 child level deep)
export const injectReactChildrenWithProps = (childComponents, propsToInject) =>
  React.Children.map(childComponents, child =>
    React.cloneElement(
      child,
      propsToInject,
      // replacement children if reqd
    ));
