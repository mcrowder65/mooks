"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _FormControl = _interopRequireDefault(require("@material-ui/core/FormControl"));

var _Input = _interopRequireDefault(require("@material-ui/core/Input"));

var _InputLabel = _interopRequireDefault(require("@material-ui/core/InputLabel"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _Card = _interopRequireDefault(require("@material-ui/core/Card"));

var _Grid = _interopRequireDefault(require("@material-ui/core/Grid"));

var _withStyles = _interopRequireDefault(require("@material-ui/core/styles/withStyles"));

var _compose = require("../../compose");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  content: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  card: {
    width: 450,
    padding: 20
  }
};

function Login(_ref) {
  var classes = _ref.classes,
      _onSubmit = _ref._onSubmit;
  return _react.default.createElement(_Card.default, {
    className: classes.card
  }, _react.default.createElement(_Typography.default, {
    variant: "h4"
  }, "Login"), _react.default.createElement("form", {
    className: classes.content,
    onSubmit: _onSubmit
  }, _react.default.createElement(_Grid.default, {
    container: true,
    alignItems: "center",
    direction: "column"
  }, _react.default.createElement(_Grid.default, {
    item: true
  }, _react.default.createElement(_FormControl.default, {
    margin: "normal",
    required: true,
    fullWidth: true
  }, _react.default.createElement(_InputLabel.default, {
    htmlFor: "email"
  }, "Email Address"), _react.default.createElement(_Input.default, {
    id: "email",
    name: "email",
    autoComplete: "email",
    autoFocus: true
  }))), _react.default.createElement(_Grid.default, {
    item: true
  }, _react.default.createElement(_FormControl.default, {
    margin: "normal",
    required: true,
    fullWidth: true
  }, _react.default.createElement(_InputLabel.default, {
    htmlFor: "password"
  }, "Password"), _react.default.createElement(_Input.default, {
    name: "password",
    type: "password",
    id: "password",
    autoComplete: "current-password"
  }))), _react.default.createElement(_Grid.default, {
    item: true
  }, _react.default.createElement(_Button.default, {
    type: "submit",
    fullWidth: true,
    variant: "contained",
    color: "primary",
    className: classes.submit
  }, "Sign in")))));
}

Login.propTypes = {
  classes: _propTypes.default.object.isRequired,
  _onSubmit: _propTypes.default.func.isRequired
};
var enhance = (0, _compose.compose)((0, _withStyles.default)(styles));

var _default = enhance(Login);

exports.default = _default;