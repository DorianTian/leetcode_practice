// Example 1:
// Input: head = [[7,null],[13,0],[11,4],[10,2],[1,0]]
// Output: [[7,null],[13,0],[11,4],[10,2],[1,0]]
// Example 2:
// Input: head = [[1,1],[2,1]]
// Output: [[1,1],[2,1]]
// Example 3:
// Input: head = [[3,null],[3,0],[3,null]]
// Output: [[3,null],[3,0],[3,null]]
/**
 * // Definition for a _Node.
 * function _Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {_Node} head
 * @return {_Node}
 */
var copyRandomList = function (head) {
  if (!head) return null;

  let current = head;

  while (current) {
    const newNode = { val: current.val, next: current.next, random: null };
    current.next = newNode;
    current = newNode.next;
  }

  current = head;
  while (current) {
    if (current.random) {
      current.next.random = current.random.next;
    }

    current = current.next.next;
  }

  current = head;
  const newHead = head.next;
  while (current) {
    const newNode = current.next;
    current.next = newNode.next;
    newNode.next = newNode.next ? newNode.next.next : null;
    current = current.next;
  }

  return newHead;
};
