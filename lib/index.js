"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.log = log;
Object.defineProperty(exports, "stringify", {
  enumerable: true,
  get: function get() {
    return _qs.stringify;
  }
});
Object.defineProperty(exports, "parse", {
  enumerable: true,
  get: function get() {
    return _qs.parse;
  }
});
Object.defineProperty(exports, "showEllipsis", {
  enumerable: true,
  get: function get() {
    return _showEllipsis.default;
  }
});
Object.defineProperty(exports, "pointer", {
  enumerable: true,
  get: function get() {
    return _pointer.default;
  }
});
Object.defineProperty(exports, "fetch", {
  enumerable: true,
  get: function get() {
    return _fetch.default;
  }
});
Object.defineProperty(exports, "debounce", {
  enumerable: true,
  get: function get() {
    return _debounce.default;
  }
});
Object.defineProperty(exports, "throttle", {
  enumerable: true,
  get: function get() {
    return _throttle.default;
  }
});
Object.defineProperty(exports, "isObject", {
  enumerable: true,
  get: function get() {
    return _isObject.default;
  }
});

var _qs = require("qs");

var _showEllipsis = _interopRequireDefault(require("./showEllipsis"));

var _pointer = _interopRequireDefault(require("./pointer"));

var _fetch = _interopRequireDefault(require("./fetch"));

var _debounce = _interopRequireDefault(require("./utils/debounce"));

var _throttle = _interopRequireDefault(require("./utils/throttle"));

var _isObject = _interopRequireDefault(require("./utils/isObject"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 将传入的值通过JSON parse 深拷贝之后打印出来
 * @param {*} param
 */
function log(param) {
  if (typeof param !== 'object') {
    console.log(param);
    return param;
  }

  console.log(JSON.parse(JSON.stringify(param)));
  return JSON.parse(JSON.stringify(param));
}