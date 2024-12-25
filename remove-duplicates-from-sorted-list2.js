// Example 1:
// Input: head = [1,2,3,3,4,4,5]
// Output: [1,2,5]
// Example 2:
// Input: head = [1,1,1,2,3]
// Output: [2,3]
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const deleteDuplicates = function(head) {
  let dummy = new ListNode();
  dummy.next = head;
  let prev = dummy;
  let current = head;

  while (current !== null) {
    if (current.next && current.val === current.next.val) {
      while (current.next && current.val === current.next.val) {
        current = current.next;
      }

      prev.next = current.next;
    } else {
      prev = current;
    }

    current = current.next;
  }

  return dummy.next;
};
