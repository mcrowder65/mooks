"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function DefaultValue(_ref) {
  var children = _ref.children,
      value = _ref.value;
  return value === undefined ? null : children;
}

DefaultValue.propTypes = {
  children: _propTypes.default.node.isRequired,
  value: _propTypes.default.any
};
var _default = DefaultValue;
exports.default = _default;