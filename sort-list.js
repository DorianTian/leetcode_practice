// Input: head = [4,2,1,3]
// Output: [1,2,3,4]
// Input: head = [-1,5,3,4,0]
// Output: [-1,0,3,4,5]
// Example 3:

// Input: head = []
// Output: []
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
const getMidNode = function (head) {
  let slow = head;
  fast = head;
  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
};

const mergeList = function (l1, l2) {
  const dummy = new ListNode();
  let current = dummy;

  while (l1 && l2) {
    if (l1.val < l2.val) {
      current.next = l1;
      l1 = l1.next;
    } else {
      current.next = l2;
      l2 = l2.next;
    }

    current = current.next;
  }

  current.next = l1 || l2;
  return dummy.next;
};

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const sortList = function (head) {
  if (!head || !head.next) return head;
  let mid = getMidNode(head);
  let left = head;
  let right = mid.next;
  mid.next = null;

  left = sortList(left);
  right = sortList(right);

  return mergeList(left, right);
};
