"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports.useArrowKeyListener = void 0;

var _react = _interopRequireDefault(require("react"));

var _useCurrentState3 = require("./use-current-state");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _slicedToArray(arr, i) {
  return (
    _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest()
  );
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;
  try {
    for (
      var _i = arr[Symbol.iterator](), _s;
      !(_n = (_s = _i.next()).done);
      _n = true
    ) {
      _arr.push(_s.value);
      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }
  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

var POSSIBLE_KEYS = {
  ARROW_LEFT: "ArrowLeft",
  ARROW_RIGHT: "ArrowRight",
};

var useArrowKeyListener = function useArrowKeyListener(_ref) {
  var onLeftKeyPress = _ref.onLeftKeyPress,
    onRightKeyPress = _ref.onRightKeyPress;

  var _useCurrentState = (0, _useCurrentState3.useCurrentState)(0),
    _useCurrentState2 = _slicedToArray(_useCurrentState, 2),
    getFocusCount = _useCurrentState2[0],
    setFocusCount = _useCurrentState2[1];

  var handleKey = function handleKey(_ref2) {
    var key = _ref2.key;

    if (getFocusCount() === 0) {
      if (key === POSSIBLE_KEYS.ARROW_LEFT) {
        onLeftKeyPress();
      } else if (key === POSSIBLE_KEYS.ARROW_RIGHT) {
        onRightKeyPress();
      }
    }
  };

  _react.default.useEffect(function() {
    window.addEventListener("keydown", handleKey);
    return function() {
      window.removeEventListener("keydown", handleKey);
    };
  }, []);

  var onBlur = function onBlur() {
    return setFocusCount(function(state) {
      return state - 1;
    });
  };

  var onFocus = function onFocus() {
    return setFocusCount(function(state) {
      return state + 1;
    });
  };

  return {
    onBlur: onBlur,
    onFocus: onFocus,
  };
};

exports.useArrowKeyListener = useArrowKeyListener;
