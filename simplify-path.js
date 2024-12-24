// Example 1:
//
// Input: path = "/home/"
//
// Output: "/home"
//
// Explanation:
//
//   The trailing slash should be removed.
//
//   Example 2:
//
// Input: path = "/home//foo/"
//
// Output: "/home/foo"
//
// Explanation:
//
//   Multiple consecutive slashes are replaced by a single one.
//
//   Example 3:
//
// Input: path = "/home/user/Documents/../Pictures"
//
// Output: "/home/user/Pictures"
//
// Explanation:
//
//   A double period ".." refers to the directory up a level (the parent directory).
//
// Example 4:
//
// Input: path = "/../"
//
// Output: "/"
//
// Explanation:
//
//   Going one level up from the root directory is not possible.
//
//   Example 5:
//
// Input: path = "/.../a/../b/c/../d/./"
//
// Output: "/.../b/d"
//
// Explanation:
//
//   "..." is a valid name for a directory in this problem.
/**
 * @param {string} path
 * @return {string}
 */
const simplifyPath = function(path) {
  const stack = [];
  const components = path.split('/');

  for (const component of components) {
    if (component === '.' || component === '') {
      continue;
    } else if (component === '..') {
      stack.pop();
    } else {
      stack.push(component);
    }
  }

  return `/${stack.join('/')}`;
};

const path = '/.../a/../b/c/../d/./';
console.log(simplifyPath(path));