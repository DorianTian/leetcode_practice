package utils

type ListNode struct {
	Val  int
	Next *ListNode
}

func CreateSingleLinkList(array []int) *ListNode {
	if len(array) == 0 {
		return nil
	}

	dummyHead := &ListNode{}
	current := dummyHead

	for _, value := range array {
		current.Next = &ListNode{Val: value}
		current = current.Next
	}

	return dummyHead
}
