// Example 1:

// Input: numCourses = 2, prerequisites = [[1,0]]
// Output: true
// Explanation: There are a total of 2 courses to take.
// To take course 1 you should have finished course 0. So it is possible.
// Example 2:

// Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
// Output: false
// Explanation: There are a total of 2 courses to take.
// To take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1. So it is impossible.
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
const canFinish = function (numCourses, prerequisites) {
  // const graph = Array.from({ length: numCourses }, () => []);
  // const inDegree = Array(numCourses).fill(0);

  // for (const [current, pre] of prerequisites) {
  //   graph[pre].push(current);
  //   inDegree[current]++;
  // }

  // const queue = [];
  // for (let i = 0; i < inDegree.length; i++) {
  //   if (inDegree[i] === 0) {
  //     queue.push(i);
  //   }
  // }

  // let count = 0;
  // while (queue.length) {
  //   const current = queue.shift();
  //   count++;

  //   for (const neighbor of graph[current]) {
  //     inDegree[neighbor]--;

  //     if (inDegree[neighbor] === 0) {
  //       queue.push(neighbor);
  //     }
  //   }
  // }

  // return count === numCourses;
  const graph = Array.from({ length: numCourses }, () => []);

  for (const [course, pre] of prerequisites) {
    graph[pre].push(course);
  }

  const visited = Array.from({ length: numCourses }, () => 0);

  const dfs = function (current) {
    if (visited[current] === 1) return false;
    if (visited[current] === 2) return true;

    visited[current] = 1;
    for (const neighbor of graph[current]) {
      if (!dfs(neighbor)) {
        return false;
      }
    }

    visited[current] = 2;
    return true;
  };

  for (let i = 0; i < graph.length; i++) {
    if (!dfs(i)) {
      return false;
    }
  }

  return true;
};
