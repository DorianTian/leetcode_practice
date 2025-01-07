// Example 1:

// Input: k = 2, w = 0, profits = [1,2,3], capital = [0,1,1]
// Output: 4
// Explanation: Since your initial capital is 0, you can only start the project indexed 0.
// After finishing it you will obtain profit 1 and your capital becomes 1.
// With capital 1, you can either start the project indexed 1 or the project indexed 2.
// Since you can choose at most 2 projects, you need to finish the project indexed 2 to get the maximum capital.
// Therefore, output the final maximized capital, which is 0 + 1 + 3 = 4.
// Example 2:

// Input: k = 3, w = 0, profits = [1,2,3], capital = [0,1,2]
// Output: 6
/**
 * @param {number} k
 * @param {number} w
 * @param {number[]} profits
 * @param {number[]} capital
 * @return {number}
 */
var findMaximizedCapital = function (k, w, profits, capital) {
  // Step 1: Pair projects with their profits and capital
  const projects = [];
  for (let i = 0; i < profits.length; i++) {
    projects.push([capital[i], profits[i]]);
  }

  // Step 2: Sort projects by capital needed (ascending)
  projects.sort((a, b) => a[0] - b[0]);

  // Step 3: Max-heap to store profits of doable projects
  const maxHeap = [];
  let currentCapital = w;
  let i = 0;

  // Helper function to maintain max-heap property
  const pushToHeap = (heap, value) => {
    heap.push(value);
    let index = heap.length - 1;
    while (index > 0) {
      const parent = Math.floor((index - 1) / 2);
      if (heap[parent] >= heap[index]) break;
      [heap[parent], heap[index]] = [heap[index], heap[parent]];
      index = parent;
    }
  };

  const popFromHeap = (heap) => {
    if (heap.length === 0) return null;
    const result = heap[0];
    const last = heap.pop();
    if (heap.length > 0) {
      heap[0] = last;
      let index = 0;
      while (true) {
        let largest = index;
        const left = 2 * index + 1;
        const right = 2 * index + 2;
        if (left < heap.length && heap[left] > heap[largest]) largest = left;
        if (right < heap.length && heap[right] > heap[largest]) largest = right;
        if (largest === index) break;
        [heap[index], heap[largest]] = [heap[largest], heap[index]];
        index = largest;
      }
    }
    return result;
  };

  // Step 4: Iterate k times to select projects
  for (let j = 0; j < k; j++) {
    // Add all projects that can be started with current capital
    while (i < projects.length && projects[i][0] <= currentCapital) {
      pushToHeap(maxHeap, projects[i][1]);
      i++;
    }

    // If no projects can be started, break
    if (maxHeap.length === 0) break;

    // Choose the project with the maximum profit
    currentCapital += popFromHeap(maxHeap);
  }

  // Step 5: Return the final capital
  return currentCapital;
};
