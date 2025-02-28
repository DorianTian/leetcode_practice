// Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  const len = nums.length;
  k = k % len;

  function reverse(start, end) {
    while (start < end) {
      [nums[start], nums[end]] = [nums[end], nums[start]];
      start++;
      end--;
    }
  }

  reverse(0, len - 1);
  reverse(0, k - 1);
  reverse(k, len - 1);

  return nums;
};

const nums = [-1, -100, 3, 99];

console.log(rotate(nums, 2));
// Input: nums = [-1,-100,3,99], k = 2
// Output: [3,99,-1,-100]
// Explanation:
// rotate 1 steps to the right: [99,-1,-100,3]
// rotate 2 steps to the right: [3,99,-1,-100]
