function insertSort(nums) {
  for (let i = 1; i < nums.length; i++) {
    let current = nums[i];
    let preIndex = i - 1;

    while (preIndex >= 0 && nums[preIndex] > current) {
      nums[preIndex + 1] = nums[preIndex];
      preIndex--;
    }

    nums[preIndex + 1] = current;
  }

  return nums;
}

const nums = [3, 2, 1, 5, 4];

console.log(insertSort(nums));

