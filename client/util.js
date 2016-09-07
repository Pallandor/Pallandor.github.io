import React from 'react';
// dont remove dep as will need for component based testing!
// import { shallow } from 'enzyme';

export const convertDateToString = dateObj => {
  const mm = dateObj.getMonth() + 1;
  const dd = dateObj.getDate();
  // TODO: Fix so renders in format DD-MM-YYYY
  return [dateObj.getFullYear(), !mm[1] && '0', mm, !dd[1] && '0', dd].join('');
};



// // THIS is reinventing passing props down a tree! just use context API
// const componentHasChildren = component => {
//   const wrapper = shallow(component);
//   return wrapper.children.length;
// }
//
// // how to pass child into shallow?
// // wrong this would replace single childNode with its own children if it has children!
// export const injectReactChildrenWithProps = (childComponents, propsToInject) =>
//   React.Children.map(childComponents, child => {
//     if (componentHasChildren(child)) {
//
//     }
//   });
//
// const componentWithChildAccess = componenet => {
//
// }
//
//
// const injectElWithProps = (el, propsToInject) =>
//   React.cloneElement(
//     el,
//     propsToInject, // shallow merge
//     // children?
//   );
