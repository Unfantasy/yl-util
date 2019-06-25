"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/web.dom.iterable");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * 链式调用，避免错误：Uncaught TypeError: Cannot read property 'xxx' of undefined
 * @param obj: 链式调用的对象
 *
 * example
 * const a = { a: { b: { c : 1 } } };
 * pointer(a).b.c(); // 1
 * pointer(a).c.c(); // undefined
 */
function pointer(obj) {
  var path = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  return new Proxy(function () {}, {
    get: function get(target, property) {
      return pointer(obj, path.concat(property));
    },
    apply: function apply(target, self, args) {
      var val = obj;

      for (var i = 0; i < path.length; i += 1) {
        if (val === null || val === undefined) break;
        val = val[path[i]];
      }

      if (val === null || val === undefined) {
        var _args = _slicedToArray(args, 1);

        val = _args[0];
      }

      return val;
    }
  });
}

var _default = pointer;
exports.default = _default;