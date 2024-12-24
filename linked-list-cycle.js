// Example 1:
// Input: head = [3,2,0,-4], pos = 1
// Output: true
// Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).
// Example 2:
// Input: head = [1,2], pos = 0
// Output: true
// Explanation: There is a cycle in the linked list, where the tail connects to the 0th node.
// Example 3:
// Input: head = [1], pos = -1
// Output: false
// Explanation: There is no cycle in the linked list.
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
const hasCycle = function (head) {
  const ListNode = function (val) {
    this.val = val;
    this.next = null;
  };

  const createLinkedList = (arr, pos) => {
    if (arr.length === 0) return null;
    const head = new ListNode(arr[0]);
    let current = head;
    let cycleNode = null;

    for (let i = 1; i < arr.length; i++) {
      current.next = new ListNode(arr[i]);
      current = current.next;

      if (i === pos) {
        cycleNode = current;
      }
    }

    if (cycleNode) {
      current.next = cycleNode;
    }

    return head;
  };

  const current = createLinkedList(head, 1);
  if (!current || !current.next) return false;
  let slow = current;
  let fast = current;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      return true;
    }
  }

  return false;
};

const head = [3, 2, 0, -4];
console.log(hasCycle(head));
