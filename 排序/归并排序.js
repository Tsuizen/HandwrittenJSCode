function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  function merge(left, right) {
    const temp = [];
    let k = 0;

    while (left.length && right.length) {
      if (left[0] < right[0]) {
        temp.push(left.shift());
      } else {
        temp.push(right.shift());
      }
    }

    return [...temp, ...left, ...right];
  }

  const mid = arr.length >> 1;
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);
  return merge(mergeSort(left), mergeSort(right));
}

const nums = [3, 2, 1, 5, 4];

console.log(mergeSort(nums));
