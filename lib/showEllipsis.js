"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es6.number.constructor");

/**
 * 超出一定字数显示...
 * @param str: 目标字段
 * @param length: 保留的字数
 */
function showEllipsis(str, length) {
  if (!str) {
    return '';
  }

  if (typeof str !== 'string' || !length) {
    return str;
  }

  if (Number.isNaN(Number(length))) {
    return str;
  }

  if (str.length < length || str.length === Number(length)) {
    return str;
  }

  return "".concat(str.substr(Number(length), length), "...");
}

var _default = showEllipsis;
exports.default = _default;