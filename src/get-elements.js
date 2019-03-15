export const getElements = (e) => {
  return Object.values(e.target.elements).reduce((accum, { value, name }) => {
    if (name) {
      // eslint-disable-next-line no-param-reassign
      accum[name] = value;
    }
    return accum;
  }, {});
};
