"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useLoader = useLoader;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function useLoader(apiCall) {
  var _React$useState = _react.default.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      isLoading = _React$useState2[0],
      setLoading = _React$useState2[1];

  var newApiCall =
  /*#__PURE__*/
  function () {
    var _ref = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee() {
      var _args = arguments;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              setLoading(true);
              _context.next = 4;
              return apiCall.apply(void 0, _args);

            case 4:
              _context.next = 9;
              break;

            case 6:
              _context.prev = 6;
              _context.t0 = _context["catch"](0);
              throw _context.t0;

            case 9:
              _context.prev = 9;
              setLoading(false);
              return _context.finish(9);

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 6, 9, 12]]);
    }));

    return function newApiCall() {
      return _ref.apply(this, arguments);
    };
  }();

  return {
    isLoading: isLoading,
    apiCall: newApiCall
  };
}