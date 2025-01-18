/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
const getIntersectionNode = function (headA, headB) {
  if (!headA || !headB) {
    return null
  }

  let pA = headA;
  let pB = headB;

  while (pA !== pB) {
    if (pA === null) {
      pA = headB
    } else {
      pA = pA.next
    }

    if (pB === null) {
      pB = headA
    } else {
      pB = pB.next
    }
  }

  return pA
};