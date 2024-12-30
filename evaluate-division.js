// Example 1:

// Input: equations = [["a","b"],["b","c"]], values = [2.0,3.0], queries = [["a","c"],["b","a"],["a","e"],["a","a"],["x","x"]]
// Output: [6.00000,0.50000,-1.00000,1.00000,-1.00000]
// Explanation:
// Given: a / b = 2.0, b / c = 3.0
// queries are: a / c = ?, b / a = ?, a / e = ?, a / a = ?, x / x = ?
// return: [6.0, 0.5, -1.0, 1.0, -1.0 ]
// note: x is undefined => -1.0
// Example 2:

// Input: equations = [["a","b"],["b","c"],["bc","cd"]], values = [1.5,2.5,5.0], queries = [["a","c"],["c","b"],["bc","cd"],["cd","bc"]]
// Output: [3.75000,0.40000,5.00000,0.20000]
// Example 3:

// Input: equations = [["a","b"]], values = [0.5], queries = [["a","b"],["b","a"],["a","c"],["x","y"]]
// Output: [0.50000,2.00000,-1.00000,-1.00000]
/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
const calcEquation = function (equations, values, queries) {
  let graphMap = new Map();

  const buildGraph = function (equations, values) {
    for (let i = 0; i < equations.length; i++) {
      const [a, b] = equations[i];
      const edge = values[i];

      if (!graphMap.has(a)) graphMap.set(a, []);
      if (!graphMap.has(b)) graphMap.set(b, []);

      graphMap.get(a).push([b, edge]);
      graphMap.get(b).push([a, 1 / edge]);
    }
  };

  const dfs = function (start, end, visited) {
    if (!graphMap.has(start) || !graphMap.has(end)) return -1.0;
    if (start === end) return 1.0;

    visited.add(start);

    for (const [neighbor, edge] of graphMap.get(start)) {
      if (visited.has(neighbor)) continue;

      const result = dfs(neighbor, end, visited);

      if (result !== -1.0) {
        return result * edge;
      }
    }

    return -1.0;
  };

  buildGraph(equations, values);

  const results = [];
  for (const [c, d] of queries) {
    const visited = new Set();
    results.push(dfs(c, d, visited));
  }

  return results;
};
