// Example 1:
//
// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation:
//   nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
//   Notice that the order of the output and the order of the triplets does not matter.
//   Example 2:
//
// Input: nums = [0,1,1]
// Output: []
// Explanation: The only possible triplet does not sum up to 0.
// Example 3:
//
// Input: nums = [0,0,0]
// Output: [[0,0,0]]
// Explanation: The only possible triplet sums up to 0.
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
let threeSum = function(nums) {
  const swap = (list, a, b) => {
    let temp = list[a];
    list[a] = list[b];
    list[b] = temp;
  };

  const partition = (list, p, r) => {
    let pivot = list[r];
    let i = p - 1;

    for (let j = p; j < list.length; j++) {
      if (list[j] < pivot) {
        i++;
        swap(list, i, j);
      }
    }

    swap(list, i + 1, r);
    return i + 1;
  };

  const quickSort = (list, p, r) => {
    if (p < r) {
      let q = partition(list, p, r);
      quickSort(list, p, q - 1);
      quickSort(list, q + 1, r);
    }
  };

  quickSort(nums, 0, nums.length - 1);
  console.log('nums: ', nums);

  let result = [];

  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      let currentSum = nums[i] + nums[left] + nums[right];

      if (currentSum === 0) {
        result.push([nums[i], nums[left], nums[right]]);
        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;

        left++;
        right--;
      } else if (currentSum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }

  return result;
};

const nums = [-1, 0, 1, 2, -1, -4];
console.log(threeSum(nums));