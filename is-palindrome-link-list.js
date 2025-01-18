/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
const isPalindrome = function (head) {
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let prev = null;
  let current = slow;
  let next = null;

  while (current !== null) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  let p1 = head;
  let p2 = prev;
  let isPalindrome = true;

  while (p2 !== null) {
    if (p1.val !== p2.val) {
      isPalindrome = false;
      break;
    }

    p1 = p1.next;
    p2 = p2.next;
  }

  return isPalindrome;
};