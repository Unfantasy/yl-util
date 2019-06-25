"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var freeGlobal = typeof global == 'object' && global !== null && global.Object === Object && global;
/** Detect free variable `self`. */

var freeSelf = typeof self == 'object' && self !== null && self.Object === Object && self;
/** Used as a reference to the global object. */

var root = freeGlobal || freeSelf || Function('return this')();
var _default = root;
exports.default = _default;