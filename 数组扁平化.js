let arr = [1, [2, [3, 4]]];

function flatten(arr) {
  while (arr.some(item => Array.isArray(item))) {
    arr = [].concat(...arr);
  }
  return arr;
}

console.log(flatten(arr)); //  [1, 2, 3, 4，5]

// flat
console.log(arr.flat(Infinity))
