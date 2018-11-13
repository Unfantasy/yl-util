/**
 * 链式调用，避免错误：Uncaught TypeError: Cannot read property 'xxx' of undefined
 * @param obj: 链式调用的对象
 * 
 * example
 * const a = { a: { b: { c : 1 } } };
 * pointer(a).b.c(); // 1
 * pointer(a).c.c(); // undefined
 */
function pointer(obj, path = []) {
  return new Proxy(() => {}, {
      get (target, property) {
          return pointer(obj, path.concat(property))
      },
      apply (target, self, args) {
          let val = obj;
          let parent;
          for(let i = 0; i < path.length; i++) {
              if(val === null || val === undefined) break;
              parent = val;
              val = val[path[i]]    
          }
          if(val === null || val === undefined) {
              val = args[0]
          }
          return val;
      }
  })
}

export default pointer;
