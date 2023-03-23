function quickSort(nums) {
  function quick(arr, low, high) {
    let temp = arr[low];

    while (low < high) {
      while (low < high && arr[high] > temp) {
        high--;
      }
      arr[low] = arr[high];

      while (low < high && arr[low] < temp) {
        low++;
      }
      arr[high] = arr[low];
    }
    arr[low] = temp;
    return low;
  }

  function sort(arr, low, high) {
    if (low < high) {
      let mid = quick(arr, low, high);
      sort(arr, low, mid);
      sort(arr, mid + 1, high);
    }
    return arr;
  }

  return sort(nums, 0, nums.length - 1);
}

const nums = [3, 2, 1, 5, 4];

console.log(quickSort(nums));
