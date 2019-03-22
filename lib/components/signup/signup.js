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

var _Grid = _interopRequireDefault(require("@material-ui/core/Grid"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _Card = _interopRequireDefault(require("@material-ui/core/Card"));

var _withStyles = _interopRequireDefault(require("@material-ui/core/styles/withStyles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  content: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  card: {
    width: 300,
    padding: 20
  }
};

function Signup(_ref) {
  var classes = _ref.classes,
      _onSubmit = _ref._onSubmit;
  return _react.default.createElement("div", {
    className: classes.content
  }, _react.default.createElement(_Card.default, {
    className: classes.card
  }, _react.default.createElement(_Grid.default, null, _react.default.createElement(_Typography.default, {
    variant: "h4"
  }, "Sign up"), _react.default.createElement("form", {
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
    color: "primary"
  }, "Sign Up")))))));
}

Signup.propTypes = {
  classes: _propTypes.default.object,
  _onSubmit: _propTypes.default.func
};

var _default = (0, _withStyles.default)(styles)(Signup);

exports.default = _default;