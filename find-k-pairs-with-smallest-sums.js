// Example 1:

// Input: nums1 = [1,7,11], nums2 = [2,4,6], k = 3
// Output: [[1,2],[1,4],[1,6]]
// Explanation: The first 3 pairs are returned from the sequence: [1,2],[1,4],[1,6],[7,2],[7,4],[11,2],[7,6],[11,4],[11,6]
// Example 2:

// Input: nums1 = [1,1,2], nums2 = [1,2,3], k = 2
// Output: [[1,1],[1,1]]
// Explanation: The first 2 pairs are returned from the sequence: [1,1],[1,1],[1,2],[2,1],[1,2],[2,2],[1,3],[1,3],[2,3]
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function (nums1, nums2, k) {
  const result = [];
  const minHeap = [];

  for (let i = 0; i < Math.min(nums1.length, k); i++) {
    minHeap.push([nums1[i], nums2[0], 0]);
  }

  const maintainHeap = function (heap, index) {
    let min = index;
    const left = index * 2 + 1;
    const right = index * 2 + 2;

    if (
      left < heap.length &&
      heap[left][0] + heap[left][1] < heap[min][0] + heap[min][1]
    ) {
      min = left;
    }

    if (
      right < heap.length &&
      heap[right][0] + heap[right][1] < heap[min][0] + heap[min][1]
    ) {
      min = right;
    }

    if (min !== index) {
      [heap[min], heap[index]] = [heap[index], heap[min]];
      maintainHeap(heap, min);
    }
  };

  const popFromHeap = function () {
    const result = minHeap[0];
    const last = minHeap.pop();

    if (minHeap.length > 0) {
      minHeap[0] = last;
      maintainHeap(minHeap, 0);
    }

    return result;
  };

  const pushToHeap = function (value) {
    minHeap.push(value);

    let index = minHeap.length - 1;
    while (index > 0) {
      const parent = Math.floor((index - 1) / 2);

      if (
        minHeap[index][0] + minHeap[index][1] >=
        minHeap[parent][0] + minHeap[parent][1]
      )
        break;

      [minHeap[index], minHeap[parent]] = [minHeap[parent], minHeap[index]];
      index = parent;
    }
  };

  while (result.length < k && minHeap.length > 0) {
    const [num1, num2, index2] = popFromHeap();
    result.push([num1, num2]);

    if (index2 + 1 < nums2.length) {
      pushToHeap([num1, nums2[index2 + 1], index2 + 1]);
    }
  }

  return result;
};
