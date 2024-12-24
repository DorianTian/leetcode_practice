/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  if (nums.length <= 2) return nums.length;
  let k = 2; // 循环不变量k，每次循环都保证 k 的位置为已经去重之后的位置

  for (let i = 2; i < nums.length; i++) {
    if (nums[k - 2] !== nums[i]) {
      nums[k] = nums[i];
      k++;
    }
  }

  //   console.log("nums: ", nums.slice(0, k));
  console.log(nums, k);
  return k;
};

const nums = [1, 1, 1, 2, 2, 2, 3];
console.log("k: ", removeDuplicates(nums));

// Input: nums = [1,1,1,2,2,2,3]
// Output: 5, nums = [1,1,2,2,3,_]
// Explanation: Your function should return k = 5, with the first five elements of nums being 1, 1, 2, 2 and 3 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).
