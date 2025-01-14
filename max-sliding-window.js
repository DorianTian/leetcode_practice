/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const maxSlidingWindow = function (nums, k) {
  const result = [];
  const dequeue = [];

  for (let i = 0; i < nums.length; i++) {
    if (dequeue.length > 0 && dequeue[0] < i - k + 1) {
      dequeue.shift()
    }

    while (dequeue.length > 0 && nums[dequeue[dequeue.length - 1]] < nums[i]) {
      dequeue.pop()
    }

    dequeue.push(i)

    if (i >= k - 1) {
      result.push(nums[dequeue[0]])
    }
  }

  return result
};