// Example 1:
//
// Input
//   ["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
//   [[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
// Output
//   [null, null, null, 1, null, -1, null, -1, 3, 4]
//
// Explanation
// LRUCache lRUCache = new LRUCache(2);
// lRUCache.put(1, 1); // cache is {1=1}
// lRUCache.put(2, 2); // cache is {1=1, 2=2}
// lRUCache.get(1);    // return 1
// lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
// lRUCache.get(2);    // returns -1 (not found)
// lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
// lRUCache.get(1);    // return -1 (not found)
// lRUCache.get(3);    // return 3
// lRUCache.get(4);    // return 4
/**
 * @param {number} capacity
 */
const LRUCache = function(capacity) {
  this.capacity = capacity;
  this.cache = new Map();
  this.head = { val: null };
  this.tail = { val: null };
  this.head.next = this.tail;
  this.tail.prev = this.head;
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  if (this.cache.has(key)) {
    const node = this.cache.get(key);
    this._moveToHead(node);

    return node.val;
  } else {
    return -1;
  }
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  if (this.cache.has(key)) {
    const node = this.cache.get(key);
    node.val = value;
    this._moveToHead(node);
  } else {
    const newNode = { key, val: value, prev: null, next: null };
    this.cache.set(key, newNode);
    this._addToHead(newNode);

    if (this.cache.size > this.capacity) {
      this._removeTail();
    }
  }
};

LRUCache.prototype._moveToHead = function(node) {
  this._removeNode(node);
  this._addToHead(node);
};

LRUCache.prototype._removeNode = function(node) {
  const prevNode = node.prev;
  const nextNode = node.next;
  prevNode.next = nextNode;
  nextNode.prev = prevNode;
};

LRUCache.prototype._addToHead = function(node) {
  const nextHead = this.head.next;
  this.head.next = node;
  node.prev = this.head;
  node.next = nextHead;
  nextHead.prev = node;
};

LRUCache.prototype._removeTail = function() {
  const tailNode = this.tail.prev;
  this._removeNode(tailNode);
  this.cache.delete(tailNode.key);
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */