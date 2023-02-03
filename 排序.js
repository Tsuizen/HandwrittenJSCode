// const nums = [3, 2, 4, 7, 6, 1]
//
// // 冒泡排序，每次将最大的数放到已排好的序列前一个
// const bubbleSort = (arr) => {
//   for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = 0; j < arr.length - i - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
//       }
//     }
//   }
//   return arr
// }
//
// //选择排序，每次选择最小的元素下标，和前面的交换
// const selectionSort = (arr) => {
//   for (let i = 0; i < arr.length - 1; i++) {
//     let minIndex = i
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[j] < arr[minIndex]) {
//         minIndex = j
//       }
//     }
//     [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
//   }
//   return arr
// }
//
// //插入排序，找到当前元素在前面的合适位置
// const insertSort = (arr) => {
//   for (let i = 1; i < arr.length; i++) {
//     let preIndex = i - 1;
//     let current = arr[i];
//     while (preIndex >= 0 && arr[preIndex] > current) {
//       arr[preIndex + 1] = arr[preIndex];
//       preIndex--;
//     }
//     arr[preIndex + 1] = current;
//   }
//   return arr;
// }
//
// //归并排序，分治法
const mergeSort = (arr) => {
  if (arr.length < 2) return arr
  const merge = (left, right) => {
    const result = [];
    while (left.length && right.length) {
      if (left[0] <= right[0]) {
        result.push(left.shift());
      } else {
        result.push(right.shift());
      }
    }

    while (left.length) {
      result.push(left.shift());
    }
    while (right.length) {
      result.push(right.shift());
    }
    return result;
  }

  let mid = arr.length >> 1;
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);
  return merge(mergeSort(left), mergeSort(right))
}
//
// const quickSort = (arr) => {
//   const quick = (arr, low, high) => {
//     let tmp = arr[low]
//     while (low < high) {
//       while (low < high && arr[high] > tmp) {
//         high--
//       }
//       arr[low] = arr[high]
//
//       while (low < high && arr[low] < tmp) {
//         low++
//       }
//       arr[high] = arr[low]
//     }
//     arr[low] = tmp
//     return low
//   }
//
//   const sort = (arr, low, high) => {
//     if (low < high) {
//       let mid = quick(arr, low, high);
//       sort(arr, low, mid);
//       sort(arr, mid + 1, high)
//     }
//     return arr
//   }
//
//   return sort(arr, 0, arr.length - 1)
// }
//
// console.log(quickSort(nums))

