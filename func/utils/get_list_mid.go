package utils

func GetListMid(head *ListNode) *ListNode {
	if head == nil {
		return nil
	}

	slow, fast := head, head
	var prev *ListNode

	for fast != nil && fast.Next != nil {
		prev = slow
		slow = slow.Next
		fast = fast.Next.Next
	}

	if prev != nil {
		prev.Next = nil
	}

	return slow
}
