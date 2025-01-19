package utils

func ReverseLinkList(start *ListNode, end *ListNode) {
	current := start
	var next *ListNode
	var reversePrev *ListNode

	for current != end {
		next = current.Next
		current.Next = reversePrev
		reversePrev = current
		current = next
	}
}
