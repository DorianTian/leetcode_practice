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
const swapPairs = function (head) {
  const dummyHead = new ListNode()
  dummyHead.next = head;
  let current = dummyHead;

  while (current.next !== null && current.next.next !== null) {
    let first = current.next;
    let second = current.next.next;

    first.next = second.next;
    second.next = first;
    current.next = second;

    current = first;
  }

  return dummyHead.next;
};