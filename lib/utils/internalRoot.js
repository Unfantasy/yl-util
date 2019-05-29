"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const freeGlobal = typeof global == 'object' && global !== null && global.Object === Object && global;
/** Detect free variable `self`. */

const freeSelf = typeof self == 'object' && self !== null && self.Object === Object && self;
/** Used as a reference to the global object. */

const root = freeGlobal || freeSelf || Function('return this')();
var _default = root;
exports.default = _default;