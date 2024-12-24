// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

// Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:

// Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
// Return k.

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let k = 1;

  // 循环不变式：每次训话能保证 当前需处理项k 始终都是 unique key
  for(let i = k; i < nums.length; i++) {
    if (nums[i] !== nums[k - 1]) {
        nums[k] = nums[i];
        k++;
    }
  }

  return k;
};

const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
const k = removeDuplicates(nums);
console.log("nums: ", nums);
console.log("k: ", k);
