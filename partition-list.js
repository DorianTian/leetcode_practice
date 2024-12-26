// Input: head = [1,4,3,2,5,2], x = 3
// Output: [1,2,2,4,3,5]
// Example 2:
//
// Input: head = [2,1], x = 2
// Output: [1,2]
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
const partition = function(head, x) {
  let lessHead = new ListNode();
  let greaterHead = new ListNode();
  let less = lessHead;
  let greater = greaterHead;

  while (head) {
    if (head.val < x) {
      less.next = head;
      less = less.next;
    } else {
      greater.next = head;
      greater = greater.next;
    }

    head = head.next;
  }

  greater.next = null;
  less.next = greaterHead.next;

  return lessHead.next;
};