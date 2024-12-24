// Example 1:

// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]
// Example 2:

// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let prefix = 1;
  let suffix = 1;
  let answers = [];
  for (let i = 0; i < nums.length; i++) {
    answers[i] = prefix;
    prefix *= nums[i];
  }

  for (let i = nums.length - 1; i >= 0; i--) {
    answers[i] *= suffix;
    suffix *= nums[i];
  }

  return answers;
};

// const nums = [1, 2, 3, 4];
const nums = [-1, 1, 0, -3, 3];
console.log(productExceptSelf(nums));
