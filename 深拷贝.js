// 深拷贝的实现
function deepClone(origin) {
  const map = new WeakMap(); // 解决循环引用

  const clone = (obj) => {
    if (typeof obj !== 'object') {
      return obj;
    }

    if (map.has(obj)) {
      return map.get(obj);
    }

    let newObj = Array.isArray(obj) ? [] : {};

    map.set(obj, newObj);

    Object.keys(obj).forEach(key => {
      if (obj.hasOwnProperty(key)) {
        newObj[key] = clone(obj[key]);
      }
    })

    return newObj;
  }
  return clone(origin);
}

let obj1 = {
  a: {
    b: {
      c: 1
    }
  }
}

// 循环引用
obj1.a = obj1;

let obj2 = deepClone(obj1);
console.log(obj2);

// chrome98以后支持的新方法，不支持拷贝function
let obj3 = structuredClone(obj1);

console.log(obj3)
