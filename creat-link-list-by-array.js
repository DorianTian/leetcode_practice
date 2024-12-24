function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const createLinkedList = function (array) {
  const dummyHead = new ListNode();
  let current = dummyHead;

  for (let i = 0; i < array.length; i++) {
    current.next = new ListNode(array[i]);
    current = current.next;
  }

  return dummyHead.next;
};
/ ** ---------------------------------------------------------- **/;
// 链表节点的构造函数
function ListNode(val = 0, next = null) {
  this.val = val;
  this.next = next;
}

// 从数组创建带头节点的链表
function arrayToList(arr) {
  let dummyHead = new ListNode(); // 创建一个哑节点
  let current = dummyHead; // `current` 用来遍历构建链表

  // 遍历数组并构建链表
  for (let i = 0; i < arr.length; i++) {
    current.next = new ListNode(arr[i]); // 创建新节点
    current = current.next; // 将 `current` 移动到新节点
  }

  return dummyHead.next; // 返回链表的第一个有效节点
}

// 测试
const arr = [1, 2, 3, 4, 5];
const head = arrayToList(arr);
console.log(head); // 输出链表，形式为：1 -> 2 -> 3 -> 4 -> 5
