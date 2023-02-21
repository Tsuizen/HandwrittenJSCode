Array.prototype.myReduce = function (fn, initValue) {
  let res = initValue;
  let arr = this;

  for (let i = 0; i < arr.length; i++) {
    res = fn(res, arr[i]);
  }

  return res;
}
const arr = [1, 2, 3];
console.log(arr.myReduce((pre, cur) => pre + cur, 0));
