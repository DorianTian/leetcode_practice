// Example 1:

// Input: nums = [3,2,1,5,6,4], k = 2
// Output: 5
// Example 2:

// Input: nums = [3,2,3,1,2,4,5,5,6], k = 4
// Output: 4
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const findKthLargest = function (nums, k) {
  const swap = function (p, r, nums) {
    let temp = nums[r];
    nums[r] = nums[p];
    nums[p] = temp;
  };
  const maxHeap = function (index, nums) {
    let left = 2 * index + 1;
    let right = 2 * index + 2;
    let max = index;

    if (left < nums.length && nums[left] > nums[max]) {
      max = left;
    }
    if (right < nums.length && nums[right] > nums[max]) {
      max = right;
    }

    if (max !== index) {
      swap(index, max, nums);
      maxHeap(max, nums);
    }

    return nums;
  };

  const buildHeap = function (nums) {
    for (let i = Math.floor(nums.length / 2) - 1; i >= 0; i--) {
      maxHeap(i, nums);
    }

    return nums;
  };

  const maxHeapList = buildHeap(nums);

  for (let i = 1; i < k; i++) {
    swap(0, nums.length - 1, nums);
    maxHeapList.pop();
    maxHeap(0, maxHeapList);
  }

  return maxHeapList[0];
};

const nums = [3, 2, 3, 1, 2, 4, 5, 5, 6],
  k = 4;
console.log(findKthLargest(nums, k));
