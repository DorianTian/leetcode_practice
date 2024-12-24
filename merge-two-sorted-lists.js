// Example 1:
// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]
// Example 2:

// Input: list1 = [], list2 = []
// Output: []
// Example 3:

// Input: list1 = [], list2 = [0]
// Output: [0]
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
const createLinkedList = (array) => {
  if (!array || !array?.length) return null;
  const dummyHead = new ListNode();
  let current = dummyHead;

  for (let i = 0; i < array.length; i++) {
    current.next = new ListNode(arrary[i]);
    current = current.next;
  }

  return dummyHead.next;
};
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
const mergeTwoLists = function (list1, list2) {
  const dummyHead = new ListNode(-1);
  let current = dummyHead;

  while (list1 !== null && list2 !== null) {
    if (list1.val < list2.val) {
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      list2 = list2.next;
    }

    current = current.next;
  }

  if (list1 !== null) {
    current.next = list1;
  }

  if (list2 !== null) {
    current.next = list2;
  }

  return dummyHead.next;
};
