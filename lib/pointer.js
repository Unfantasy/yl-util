"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

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
  let path = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  return new Proxy(() => {}, {
    get(target, property) {
      return pointer(obj, path.concat(property));
    },

    apply(target, self, args) {
      let val = obj;

      for (let i = 0; i < path.length; i += 1) {
        if (val === null || val === undefined) break;
        val = val[path[i]];
      }

      if (val === null || val === undefined) {
        [val] = args;
      }

      return val;
    }

  });
}

var _default = pointer;
exports.default = _default;