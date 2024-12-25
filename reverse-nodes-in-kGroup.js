// Example 1:
// Input: head = [1,2,3,4,5], k = 2
// Output: [2,1,4,3,5]
// Example 2:
// Input: head = [1,2,3,4,5], k = 3
// Output: [3,2,1,4,5]
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
const reverseKGroup = function (head, k) {
  const reverseLink = (start, end) => {
    let next = null;
    let reversePrev = null;
    let current = start;

    while (current !== end) {
      next = current.next;
      current.next = reversePrev;
      reversePrev = current;
      current = next;
    }

    return reversePrev;
  };

  let dummyHead = { val: -1, next: head };
  let prevGroupEnd = dummyHead;

  while (true) {
    let groupStart = prevGroupEnd.next;
    let groupEnd = prevGroupEnd;

    for (let i = 0; i < k && groupEnd !== null; i++) {
      groupEnd = groupEnd.next;
    }

    if (groupEnd === null) {
      break;
    }

    let nextGroupStart = groupEnd.next;
    reverseLink(groupStart, groupEnd.next);

    // 把groupStart -> x -> x -> groupEnd
    // 转换成 groupEnd -> x -> x -> groupStart
    // dummyHead -> groupStart -------> dummyHead -> groupEnd
    prevGroupEnd.next = groupEnd;
    groupStart.next = nextGroupStart;
    prevGroupEnd = groupStart;
  }

  return dummyHead.next;
};
