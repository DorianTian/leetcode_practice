// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.
// Example 2:

// Input: l1 = [0], l2 = [0]
// Output: [0]
// Example 3:

// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function createLinkedList(list) {
  if (list.length === 0) return null;
  const head = new ListNode(list[0].val);
  let current = head;

  for (let i = 1; i < list.length; i++) {
    current.next = new ListNode(list[i].val);
    current = current.next;
  }

  return head;
}

const l1 = [9, 9, 9, 9, 9, 9, 9],
  l2 = [9, 9, 9, 9];
const l1List = createLinkedList(l1);
const l2List = createLinkedList(l2);

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = function (l1, l2) {
  const dummyHead = new ListNode(0);
  let current = dummyHead;
  let carry = 0;

  while (l1 !== null || l2 !== null || carry !== 0) {
    let sum = carry;

    if (l1) {
      sum += l1.val;
      l1 = l1.next;
    }

    if (l2) {
      sum += l2.val;
      l2 = l2.next;
    }

    carry = Math.floor(sum / 10);

    current.next = new ListNode(sum % 10);
    current = current.next;
  }

  return dummyHead.next;
};

console.log(addTwoNumbers(l1List, l2List));
