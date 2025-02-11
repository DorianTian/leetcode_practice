package classification

type Trie struct {
	children map[rune]*Trie
	isEnd    bool
}

//func Constructor() Trie {
//	return Trie{children: make(map[rune]*Trie), isEnd: false}
//}
//
//func (that *Trie) Insert(word string) {
//	node := that
//	for _, ch := range word {
//		if _, exist := node.children[ch]; !exist {
//			node.children[ch] = &Trie{children: make(map[rune]*Trie), isEnd: false}
//		}
//		node = node.children[ch]
//	}
//
//	node.isEnd = true
//}
//
//func (that *Trie) Search(word string) bool {
//	node := that
//	for _, ch := range word {
//		if _, exist := node.children[ch]; !exist {
//			return false
//		}
//
//		node = node.children[ch]
//	}
//
//	return node.isEnd
//}
//
//func (that *Trie) StartsWith(prefix string) bool {
//	node := that
//	for _, ch := range prefix {
//		if _, exist := node.children[ch]; !exist {
//			return false
//		}
//
//		node = node.children[ch]
//	}
//
//	return true
//}
