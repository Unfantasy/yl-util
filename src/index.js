export { default as showEllipsis } from './showEllipsis.js';
export { default as pointer } from './pointer.js';
export { default as fetch } from './fetch.js';

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
