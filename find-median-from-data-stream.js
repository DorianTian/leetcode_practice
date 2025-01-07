// Example 1:

// Input
// ["MedianFinder", "addNum", "addNum", "findMedian", "addNum", "findMedian"]
// [[], [1], [2], [], [3], []]
// Output
// [null, null, null, 1.5, null, 2.0]

// Explanation
// MedianFinder medianFinder = new MedianFinder();
// medianFinder.addNum(1);    // arr = [1]
// medianFinder.addNum(2);    // arr = [1, 2]
// medianFinder.findMedian(); // return 1.5 (i.e., (1 + 2) / 2)
// medianFinder.addNum(3);    // arr[1, 2, 3]
// medianFinder.findMedian(); // return 2.0
class MedianFinder {
  constructor() {
    this.maxHeap = []; // 最大堆，存储较小的一半，堆顶为最大值
    this.minHeap = []; // 最小堆，存储较大的一半，堆顶为最小值
  }

  // 添加数字
  addNum(num) {
    // Step 1: Determine which heap the number should go to
    if (this.maxHeap.length === 0 || num <= -this.maxHeap[0]) {
      // If the number is smaller than or equal to the max heap's root, add it to maxHeap
      this.maxHeap.push(-num); // Store negative to simulate max-heap
      this._heapifyUp(this.maxHeap, this.maxHeap.length - 1);
    } else {
      // Otherwise, add it to the minHeap
      this.minHeap.push(num);
      this._heapifyUp(this.minHeap, this.minHeap.length - 1);
    }

    // Step 2: Balance the heaps (size of maxHeap can only be at most 1 larger than minHeap)
    if (this.maxHeap.length > this.minHeap.length + 1) {
      // Move the largest element from maxHeap to minHeap
      const maxVal = -this.maxHeap[0];
      this.maxHeap[0] = this.maxHeap[this.maxHeap.length - 1];
      this.maxHeap.pop();
      this._heapifyDown(this.maxHeap, 0);

      this.minHeap.push(maxVal);
      this._heapifyUp(this.minHeap, this.minHeap.length - 1);
    } else if (this.minHeap.length > this.maxHeap.length) {
      // Move the smallest element from minHeap to maxHeap
      const minVal = this.minHeap[0];
      this.minHeap[0] = this.minHeap[this.minHeap.length - 1];
      this.minHeap.pop();
      this._heapifyDown(this.minHeap, 0);

      this.maxHeap.push(-minVal);
      this._heapifyUp(this.maxHeap, this.maxHeap.length - 1);
    }
  }

  // 获取中位数
  findMedian() {
    if (this.maxHeap.length > this.minHeap.length) {
      // If maxHeap has more elements, the median is the top of maxHeap
      return -this.maxHeap[0];
    } else {
      // If heaps are equal, the median is the average of the tops of both heaps
      return (-this.maxHeap[0] + this.minHeap[0]) / 2;
    }
  }

  // Helper functions for maintaining heap property
  _heapifyUp(heap, index) {
    while (index > 0) {
      const parent = Math.floor((index - 1) / 2);
      if (heap[parent] <= heap[index]) break;
      [heap[parent], heap[index]] = [heap[index], heap[parent]];
      index = parent;
    }
  }

  _heapifyDown(heap, index) {
    const length = heap.length;
    const left = 2 * index + 1;
    const right = 2 * index + 2;
    let smallest = index;

    if (left < length && heap[left] < heap[smallest]) {
      smallest = left;
    }

    if (right < length && heap[right] < heap[smallest]) {
      smallest = right;
    }

    if (smallest !== index) {
      [heap[smallest], heap[index]] = [heap[index], heap[smallest]];
      this._heapifyDown(heap, smallest);
    }
  }
}

// Example usage:
const medianFinder = new MedianFinder();
medianFinder.addNum(1);
medianFinder.addNum(2);
console.log(medianFinder.findMedian()); // Output: 1.5
medianFinder.addNum(3);
console.log(medianFinder.findMedian()); // Output: 2

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
