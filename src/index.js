import { stringify, parse } from 'qs';
/**
 * 将传入的值通过JSON parse 深拷贝之后打印出来
 * @param {*} param
 */
export function log(param) {
  if (typeof param !== 'object') {
    console.log(param);
    return param;
  }

  console.log(JSON.parse(JSON.stringify(param)));
  return JSON.parse(JSON.stringify(param));
}

export { default as showEllipsis } from './showEllipsis';
export { default as pointer } from './pointer';
export { default as fetch } from './fetch';
export { default as debounce } from './utils/debounce';
export { default as throttle } from './utils/throttle';
export { stringify, parse };
