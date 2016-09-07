import React from 'react';

export const convertDateToString = dateObj => {
  const mm = dateObj.getMonth() + 1;
  const dd = dateObj.getDate();
  // TODO: Fix so renders in format DD-MM-YYYY
  return [dateObj.getFullYear(), !mm[1] && '0', mm, !dd[1] && '0', dd].join('');
};
