// Example 1:

// Input: nums = [1,2,3,1]
// Output: 2
// Explanation: 3 is a peak element and your function should return the index number 2.
// Example 2:

// Input: nums = [1,2,1,3,5,6,4]
// Output: 5
// Explanation: Your function can return either index number 1 where the peak element is 2, or index number 5 where the peak element is 6.
/**
 * @param {number[]} nums
 * @return {number}
 */
const findPeakElement = function (nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (
      (mid === 0 || nums[mid] > nums[mid - 1]) &&
      (mid === nums.length - 1 || nums[mid] > nums[mid + 1])
    ) {
      return mid;
    }

    if (mid < nums.length - 1 && nums[mid] < nums[mid + 1]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
};

const nums = [1, 2, 1, 2, 3, 4];
console.log(findPeakElement(nums));
