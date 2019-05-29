import 'whatwg-fetch';
import { stringify } from 'qs';

function parseJSON(response) {
  return response.json();
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new Error(response.statusText);
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
export default function request(url, options) {
  const sendOptions = { credentials: 'include', ...options };
  const timeoutPromise = new Promise((resolve) => {
    setTimeout(() => {
      // reject(new Error('fetch timeout'));
      resolve({ success: false, code: '8888', msg: '登录超时', data: {} });
    }, options.timeout || 10000);
  });

  delete sendOptions.timeout;

  // post 默认 application/json 请求
  if (sendOptions.method === 'POST') {
    sendOptions.mode = sendOptions.mode || 'cors';
    sendOptions.headers = options.headers || {};
    sendOptions.headers = {
      ...(sendOptions.headers || {}),
      'Content-Type': sendOptions.headers['Content-Type'] || 'application/json',
    };

    // body 转换
    if (
      (!sendOptions.headers || sendOptions.headers['Content-Type'] === 'application/json')
      &&
      typeof sendOptions.body === 'object'
    ) {
      sendOptions.body = JSON.stringify(sendOptions.body);
    }

    if (
      sendOptions.headers['Content-Type'] === 'application/x-www-form-urlencoded'
      &&
      typeof sendOptions.body === 'object'
    ) {
      sendOptions.body = stringify(sendOptions.body);
    }
  }
  const responsePromise = fetch(url, sendOptions).then(checkStatus).then(parseJSON);

  return Promise.race([responsePromise, timeoutPromise])
    .catch(err => ({ err }));
}
