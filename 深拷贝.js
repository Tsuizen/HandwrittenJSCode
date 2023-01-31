// 深拷贝的实现
function deepClone(obj) {
  if (!obj || typeof obj !== 'object') {
    return {};
  }

  const map = new WeakMap(); // 解决循环引用问题
  map.set(obj, true);

  function copy(obj) {
    let newObj = Array.isArray(obj) ? [] : {};

    Object.keys(obj).forEach(key => {
      if (obj.hasOwnProperty(key)) {
        if (map.has(obj[key])) {
          console.log('循环引用')
          newObj[key] = null;
        } else {
          if (typeof obj[key] === 'object') {
            newObj[key] = copy(obj[key]);
            map.set(obj[key], true);
          }else {
            newObj[key] = obj[key];
          }
        }
      }
    })

    return newObj;
  }
  return copy(obj);
}

let obj1 = {
  a: {
    b: {
      c: 1
    }
  }
}

// 循环引用
// obj1.a.b.c = obj1;

let obj2 = deepClone(obj1);

obj1.a.b.c = 2;

console.log(obj2)
