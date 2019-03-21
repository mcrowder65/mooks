"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _CircularProgress = _interopRequireDefault(require("@material-ui/core/CircularProgress"));

var _withStyles = _interopRequireDefault(require("@material-ui/core/styles/withStyles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function LoaderButton(props) {
  var children = props.children,
      isFetching = props.isFetching,
      classes = props.classes,
      circleSize = props.circleSize,
      otherProps = _objectWithoutProperties(props, ["children", "isFetching", "classes", "circleSize"]);

  return _react.default.createElement(_Button.default, _extends({}, otherProps, {
    disabled: isFetching === true
  }), children, isFetching ? _react.default.createElement(_CircularProgress.default, {
    size: circleSize,
    className: classes.loader,
    "data-testid": "circular-progress"
  }) : null);
}

LoaderButton.propTypes = {
  children: _propTypes.default.node.isRequired,
  isFetching: _propTypes.default.bool.isRequired,
  classes: _propTypes.default.object.isRequired,
  circleSize: _propTypes.default.number
};
LoaderButton.defaultProps = {
  isFetching: false,
  circleSize: 30
};
var styles = {
  loader: {
    position: "absolute"
  }
};

var _default = (0, _withStyles.default)(styles)(LoaderButton);

exports.default = _default;