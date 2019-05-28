"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.log = log;
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

var _showEllipsis = _interopRequireDefault(require("./showEllipsis.js"));

var _pointer = _interopRequireDefault(require("./pointer.js"));

var _fetch = _interopRequireDefault(require("./fetch.js"));

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