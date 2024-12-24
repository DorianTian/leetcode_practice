// Example 1:
//
// Input: nums = [0,1,2,4,5,7]
// Output: ["0->2","4->5","7"]
// Explanation: The ranges are:
//   [0,2] --> "0->2"
//     [4,5] --> "4->5"
//     [7,7] --> "7"
// Example 2:
//
// Input: nums = [0,2,3,4,6,8,9]
// Output: ["0","2->4","6","8->9"]
// Explanation: The ranges are:
//   [0,0] --> "0"
//     [2,4] --> "2->4"
//     [6,6] --> "6"
//     [8,9] --> "8->9"
/**
 * @param {number[]} nums
 * @return {string[]}
 */
const summaryRanges = function(nums) {
  const range = [];

  if (nums.length === 0) return range;

  let start = nums[0];

  for (let i = 1; i <= nums.length; i++) {
    if (i === nums.length || nums[i] !== nums[i - 1] + 1) {
      if (start === nums[i - 1]) {
        range.push(start.toString());
      } else {
        range.push(start.toString() + '->' + nums[i - 1].toString());
      }

      if (i < nums.length) {
        start = nums[i];
      }
    }
  }

  return range;
};

const nums = [0, 1, 2, 4, 5, 7];
console.log(summaryRanges(nums));