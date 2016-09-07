import React from 'react';

export const convertDateToString = dateObj => {
  let mm = dateObj.getMonth() + 1;
  let dd = dateObj.getDate();
  dd = [!dd[1] && '0', dd].join('');
  mm = [!mm[1] && '0', mm].join('');
  return [dd, mm, dateObj.getFullYear()].join('/');
};
