// Example 1:
//
// Input
//   ["MinStack","push","push","push","getMin","pop","top","getMin"]
//   [[],[-2],[0],[-3],[],[],[],[]]
//
// Output
//   [null,null,null,null,-3,null,0,-2]
//
// Explanation
// MinStack minStack = new MinStack();
// minStack.push(-2);
// minStack.push(0);
// minStack.push(-3);
// minStack.getMin(); // return -3
// minStack.pop();
// minStack.top();    // return 0
// minStack.getMin(); // return -2

const MinStack = function() {
  this.stack = [];
  this.minStack = [];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
  this.stack.push(val);
  if (this.minStack.length === 0 || val < this.getMin()) {
    this.minStack.push(val);
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  if (this.stack.length === 0) return;
  const removed = this.stack.pop();
  if (this.minStack !== 0 && removed === this.getMin()) {
    this.minStack.pop();
  }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  if (this.stack.length === 0) return null;
  return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  if (this.minStack.length === 0) return null;
  return this.minStack[this.minStack.length - 1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

const minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-1);
const min = minStack.getMin();
console.log(min);
const top = minStack.top();    // return 0
console.log(top);
minStack.pop();
const minA = minStack.getMin(); // return -2
console.log(minA);