import showEllipsis from './utils/showEllipsis.js';
import pointer from './utils/pointer.js';

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

export {
  showEllipsis,
  pointer,
};

export default {
  showEllipsis,
  pointer,
  log,
};
