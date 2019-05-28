# yl-util
一些好用的工具函数

### pointer
链式调用，避免报错：Uncaught TypeError: Cannot read property 'xxx' of undefined
```
const a = { a: { b: { c : 1 } } };
pointer(a).b.c(); // 1
pointer(a).c.c(); // undefined
```

### showEllipsis
超出一定字数显示...
```
const str = '一个矢量图标管理平台，可以用字体代替繁多的小图片。';
showEllipsis(str, 4) // 一个矢量...
```

### log
使用 `console.log` 打印对象，如果是对象使用 `JSON.parse(JSON.stringify(xx))` 深拷贝，
```
const a = { a: { b: { c : 1 } } };
log(a); // { a: { b: { c : 1 } } }
```


