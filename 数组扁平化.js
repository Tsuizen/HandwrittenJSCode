let arr = [1, [2, [3, 4]]];

function _flat (arr, depth) {
  if (!Array.isArray(arr) || depth === 0) {
    return arr;
  }

  return arr.reduce((prev, cur) => {
    if (Array.isArray(cur)) {
      return prev.concat(_flat(cur, depth - 1));
    } else {
      return prev.concat(cur);
    }
  }, [])
}

function flatten(arr, deep) {
  if (!Array.isArray(arr) || !deep) {
    return arr;
  }

  while (arr.some(item => Array.isArray(item)) && deep) {
    arr = [].concat(...arr);
    deep--;
  }
  return arr;
}

Array.prototype.flatten = function (deep = 1) {
  let temp = this;
  while (temp.some(item => Array.isArray(item)) && deep) {
    temp = [].concat(...temp);
    deep--;
  }
  return temp;
}

console.log(arr.flatten(1));
console.log(arr);
// console.log(flatten(arr, 1)); //  [1, 2, 3, 4，5]

// flat
// console.log(arr.flat(Infinity))
