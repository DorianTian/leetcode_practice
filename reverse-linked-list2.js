// Input: head = [1,2,3,4,5], left = 2, right = 4
// Output: [1,4,3,2,5]
// Example 2:

// Input: head = [5], left = 1, right = 1
// Output: [5]
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
  if (!head) return null;
  if (left === right) return head;

  let dummy = { val: -1, next: head };
  let prev = dummy;

  for (let i = 1; i < left; i++) {
    prev = prev.next;
  }

  let current = prev.next;
  let next = null;
  let reversePrev = null;

  for (let i = left; i <= right; i++) {
    next = current.next;
    current.next = reversePrev;
    reversePrev = current;
    current = next;
  }

  prev.next.next = current;
  prev.next = reversePrev;

  return dummy.next;
};
