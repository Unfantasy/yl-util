"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = request;

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.keys");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.regexp.to-string");

require("core-js/modules/es6.promise");

require("core-js/modules/es6.object.to-string");

require("whatwg-fetch");

var _qs = require("qs");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function parseJSON(response) {
  return response.json();
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  var error = new Error(response.statusText);
  error.response = response;
  throw error;
}
/**
 * 使用 fetch 请求接口，返回一个 promise
 * @param  {string} url       请求接口地址
 * @param  {object} [options] fetch 参数
 *                   timeout: 超时时间
 *                   methed: 请求类型
 *                   body: 请求参数
 */


function request(url, options) {
  var sendOptions = _objectSpread({
    credentials: 'include'
  }, options);

  var timeoutPromise = new Promise(function (resolve) {
    setTimeout(function () {
      // reject(new Error('fetch timeout'));
      resolve({
        success: false,
        code: 'timeout',
        msg: '登录超时',
        data: {}
      });
    }, options.timeout || 10000);
  });
  delete sendOptions.timeout; // post 默认 application/json 请求

  if (sendOptions.method && sendOptions.method.toLowerCase() === 'post') {
    sendOptions.mode = sendOptions.mode || 'cors';
    sendOptions.headers = options.headers || {};
    sendOptions.headers = _objectSpread({}, sendOptions.headers || {}, {
      'Content-Type': sendOptions.headers['Content-Type'] || 'application/json'
    }); // body 转换

    if ((!sendOptions.headers || sendOptions.headers['Content-Type'] === 'application/json') && typeof sendOptions.body === 'object') {
      sendOptions.body = JSON.stringify(sendOptions.body);
    }

    if (sendOptions.headers['Content-Type'] === 'application/x-www-form-urlencoded' && sendOptions.body && Object.prototype.toString.call(sendOptions.body) === '[object Object]') {
      sendOptions.body = (0, _qs.stringify)(sendOptions.body);
    }
  } // 不指定 header 的情况


  if (sendOptions.noHeader) {
    delete sendOptions.noHeader;
    delete sendOptions.headers;
  }

  var responsePromise = fetch(url, sendOptions).then(checkStatus).then(parseJSON);
  return Promise.race([responsePromise, timeoutPromise]).catch(function (err) {
    return {
      err: err
    };
  });
}