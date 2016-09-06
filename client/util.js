exports.convertDateToString = dateObj => {
  const mm = dateObj.getMonth() + 1;
  const dd = dateObj.getDate();
  // TODO: Fix so renders as DD-MM-YYYY, instead of YYYYMMDD
  return [dateObj.getFullYear(), !mm[1] && '0', mm, !dd[1] && '0', dd].join(''); // padding
};
