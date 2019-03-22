"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getElements = void 0;

var getElements = function getElements(e) {
  return Object.values(e.target.elements).reduce(function (accum, _ref) {
    var value = _ref.value,
        name = _ref.name;

    if (name) {
      // eslint-disable-next-line no-param-reassign
      accum[name] = value;
    }

    return accum;
  }, {});
};

exports.getElements = getElements;