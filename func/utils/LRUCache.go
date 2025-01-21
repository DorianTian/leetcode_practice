package utils

import "container/list"

type LRUCache struct {
	capacity int
	cache    map[int]*list.Element
	order    *list.List
}

type CacheNode struct {
	key   int
	value int
}

func Constructor(capacity int) LRUCache {
	return LRUCache{
		capacity: capacity,
		cache:    make(map[int]*list.Element),
		order:    list.New(),
	}
}

func (lru *LRUCache) Get(key int) int {
	if node, found := lru.cache[key]; found {
		lru.order.MoveToFront(node)
		return node.Value.(*CacheNode).value
	}

	return -1
}

func (lru *LRUCache) Put(key int, value int) {
	if node, found := lru.cache[key]; found {
		node.Value.(*CacheNode).value = value
		lru.order.MoveToFront(node)
	} else {
		if lru.order.Len() == lru.capacity {
			tail := lru.order.Back()
			lru.order.Remove(tail)
			delete(lru.cache, tail.Value.(*CacheNode).key)
		}

		node := &CacheNode{key: key, value: value}
		ele := lru.order.PushFront(node)
		lru.cache[key] = ele
	}
}
