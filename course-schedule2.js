// Example 1:

// Input: numCourses = 2, prerequisites = [[1,0]]
// Output: [0,1]
// Explanation: There are a total of 2 courses to take. To take course 1 you should have finished course 0. So the correct course order is [0,1].
// Example 2:

// Input: numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]
// Output: [0,2,1,3]
// Explanation: There are a total of 4 courses to take. To take course 3 you should have finished both courses 1 and 2. Both courses 1 and 2 should be taken after you finished course 0.
// So one correct course order is [0,1,2,3]. Another correct ordering is [0,2,1,3].
// Example 3:

// Input: numCourses = 1, prerequisites = []
// Output: [0]
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
const findOrder = function (numCourses, prerequisites) {
  // const graph = Array.from({ length: numCourses }, () => []);
  // const inDegree = Array.from({ length: numCourses }, () => 0);

  // for (const [course, pre] of prerequisites) {
  //   graph[pre].push(course);
  //   inDegree[course]++;
  // }

  // const queue = [];
  // for (let i = 0; i < inDegree.length; i++) {
  //   if (inDegree[i] === 0) {
  //     queue.push(i);
  //   }
  // }

  // const topOrder = [];

  // while (queue.length) {
  //   const current = queue.shift();
  //   topOrder.push(current);

  //   for (let neighbor of graph[current]) {
  //     inDegree[neighbor]--;
  //     if (inDegree[neighbor] === 0) {
  //       queue.push(neighbor);
  //     }
  //   }
  // }

  // return topOrder.length === numCourses ? topOrder : [];
  const graph = Array.from({ length: numCourses }, () => []);
  const topOrder = [];
  const visitedMap = Array.from({ length: numCourses }, () => 0);
  let hasCycle = false;

  for (const [course, pre] of prerequisites) {
    graph[pre].push(course);
  }

  const dfs = function (current) {
    if (visitedMap[current] === 1) {
      hasCycle = true;
      return;
    }
    if (visitedMap[current] === 2) {
      return;
    }
    visitedMap[current] = 1;

    for (const neighbor of graph[current]) {
      dfs(neighbor);
      if (hasCycle) return;
    }

    visitedMap[current] = 2;
    topOrder.push(current);
  };

  for (let i = 0; i < graph.length; i++) {
    if (visitedMap[i] === 0) {
      dfs(i);
      if (hasCycle) return [];
    }
  }

  hasCycle = false;

  return topOrder.reverse();
};
