function curry1(fn, ...args) {
  // 将参数作为 bind() 的参数写在 this 后面。
  // 当绑定函数被调用时，这些参数会被插入到目标函数的参数列表的开始位置，传递给绑定函数的参数会跟在它们后面。
  return fn.length <= args.length ? fn(...args) : curry1.bind(null, fn, ...args);
}

function curry2(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function(...args2) {
        return curried.apply(this, args.concat(args2));
      }
    }
  };
}


function sum(a, b, c) {
  return a + b + c;
}

let currySum = curry1(sum);
let sumThree = currySum(1)(2);

console.log(sumThree(3))
