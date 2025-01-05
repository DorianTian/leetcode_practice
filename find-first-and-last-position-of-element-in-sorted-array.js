// Example 1:

// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]
// Example 2:

// Input: nums = [5,7,7,8,8,10], target = 6
// Output: [-1,-1]
// Example 3:

// Input: nums = [], target = 0
// Output: [-1,-1]
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const searchRange = function (nums, target) {
  if (nums.length === 0) return [-1, -1];

  const findFirstPosition = function (nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let result = -1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);

      if (nums[mid] === target) {
        result = mid;
        right = mid - 1;
      } else if (nums[mid] > target) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }

    return result;
  };

  const findEndPosition = function (nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let result = -1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);

      if (nums[mid] === target) {
        result = mid;
        left = mid + 1;
      } else if (nums[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    return result;
  };

  const start = findFirstPosition(nums, target);

  if (start === -1) {
    return [-1, -1];
  }

  const end = findEndPosition(nums, target);

  return [start, end];
};

const nums = [5, 7, 7, 8, 8, 10];
console.log(searchRange(nums, 8));
