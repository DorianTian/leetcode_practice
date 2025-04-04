package classification

import (
	"container/heap"
	"leetcode_practice/func/utils"
)

func GetIntersectionNode(headA, headB *utils.ListNode) *utils.ListNode {
	// 检查链表是否为空
	if headA == nil || headB == nil {
		return nil
	}

	// 初始化两个指针
	pA, pB := headA, headB

	// 遍历两个链表
	for pA != pB {
		// 如果 pA 到达链表末尾，则切换到链表 B 的头节点
		if pA == nil {
			pA = headB
		} else {
			pA = pA.Next
		}

		// 如果 pB 到达链表末尾，则切换到链表 A 的头节点
		if pB == nil {
			pB = headA
		} else {
			pB = pB.Next
		}
	}

	// 返回交点节点（如果没有交点，则 pA 和 pB 最终都会为 nil）
	return pA
}

func ReverseList(head *utils.ListNode) *utils.ListNode {
	var prev *utils.ListNode
	current := head

	for current != nil {
		next := current.Next
		current.Next = prev
		prev = current
		current = next
	}

	return prev
}

func IsPalindrome(head *utils.ListNode) bool {
	slow, fast := head, head
	for fast != nil && fast.Next != nil {
		slow = slow.Next
		fast = fast.Next.Next
	}

	var prev *utils.ListNode
	current := slow

	for current != nil {
		next := current.Next
		current.Next = prev
		prev = current
		current = next
	}

	isPalindrome := true
	p1, p2 := head, prev

	for p2 != nil {
		if p1.Val != p2.Val {
			isPalindrome = false
			break
		}
		p1 = p1.Next
		p2 = p2.Next
	}

	return isPalindrome
}

func HasCycle(head *utils.ListNode) bool {
	slow, fast := head, head

	for fast != nil && fast.Next != nil {
		slow = slow.Next
		fast = fast.Next.Next

		if slow == fast {
			return true
		}
	}

	return false
}

func DetectCyce(head *utils.ListNode) *utils.ListNode {
	slow, fast := head, head
	hasCycle := false

	for fast != nil && fast.Next != nil {
		slow = slow.Next
		fast = fast.Next.Next

		if slow == fast {
			hasCycle = true
			break
		}
	}

	if !hasCycle {
		return nil
	}

	slow = head
	for slow != fast {
		slow = slow.Next
		fast = fast.Next
	}

	return slow
}

func MergeTwoLists(list1 *utils.ListNode, list2 *utils.ListNode) *utils.ListNode {
	dummyHead := &utils.ListNode{}
	current := dummyHead

	for list1 != nil && list2 != nil {
		if list1.Val <= list2.Val {
			current.Next = list1
			list1 = list1.Next
		} else {
			current.Next = list2
			list2 = list2.Next
		}

		current = current.Next
	}

	if list1 != nil {
		current.Next = list1
	}
	if list2 != nil {
		current.Next = list2
	}

	return dummyHead.Next
}

func AddTwoNumbers(l1 *utils.ListNode, l2 *utils.ListNode) *utils.ListNode {
	dummyHead := &utils.ListNode{}
	current := dummyHead
	carry := 0

	for l1 != nil || l2 != nil || carry != 0 {
		sum := carry
		if l1 != nil {
			sum += l1.Val
			l1 = l1.Next
		}

		if l2 != nil {
			sum += l2.Val
			l2 = l2.Next
		}

		carry = sum / 10

		current.Next = &utils.ListNode{Val: sum % 10}
		current = current.Next
	}

	return dummyHead.Next
}

func RemoveNthFromEnd(head *utils.ListNode, n int) *utils.ListNode {
	dummyHead := &utils.ListNode{}
	dummyHead.Next = head
	slow, fast := dummyHead, dummyHead

	for i := 0; i <= n; i++ {
		fast = fast.Next
	}

	for fast != nil {
		fast = fast.Next
		slow = slow.Next
	}

	slow.Next = slow.Next.Next

	return dummyHead.Next
}

func SwapPairs(head *utils.ListNode) *utils.ListNode {
	dummyHead := &utils.ListNode{}
	dummyHead.Next = head

	current := dummyHead

	for current.Next != nil && current.Next.Next != nil {
		first, second := current.Next, current.Next.Next

		first.Next = second.Next
		second.Next = first
		current.Next = second

		current = first
	}

	return dummyHead.Next
}

func ReverseKGroup(head *utils.ListNode, k int) *utils.ListNode {
	dummyHead := &utils.ListNode{}
	dummyHead.Next = head
	prevGroupEnd := dummyHead

	for {
		groupStart := prevGroupEnd.Next
		groupEnd := prevGroupEnd

		for i := 0; i < k && groupEnd != nil; i++ {
			groupEnd = groupEnd.Next
		}

		if groupEnd == nil {
			break
		}

		nextGroupStart := groupEnd.Next
		utils.ReverseLinkList(groupStart, groupEnd.Next)

		prevGroupEnd.Next = groupEnd
		groupStart.Next = nextGroupStart
		prevGroupEnd = groupStart
	}

	return dummyHead.Next
}

func CopyRandomList(head *utils.Node) *utils.Node {
	if head == nil {
		return nil
	}

	current := head
	for current != nil {
		copyNode := &utils.Node{Val: current.Val, Next: current.Next, Random: nil}
		current.Next = copyNode
		current = copyNode.Next
	}

	current = head
	for current != nil {
		if current.Random != nil {
			current.Next.Random = current.Random.Next
		}

		current = current.Next.Next
	}

	current = head
	newHead := head.Next
	for current != nil {
		copyNode := current.Next
		current.Next = copyNode.Next
		if copyNode.Next != nil {
			copyNode.Next = copyNode.Next.Next
		} else {
			copyNode.Next = nil
		}

		current = current.Next
	}

	return newHead
}

func SortList(head *utils.ListNode) *utils.ListNode {
	if head == nil || head.Next == nil {
		return head
	}

	mid := utils.GetListMid(head)
	left := SortList(head)
	right := SortList(mid)

	return utils.MergeLinkList(left, right)
}

func MergeKLists(lists []*utils.ListNode) *utils.ListNode {
	pg := &utils.PriorityQueue{}
	heap.Init(pg)

	for _, list := range lists {
		if list != nil {
			heap.Push(pg, list)
		}
	}

	dummyHead := &utils.ListNode{}
	current := dummyHead

	for pg.Len() > 0 {
		minNode := heap.Pop(pg).(*utils.ListNode)
		current.Next = minNode
		current = current.Next

		if minNode.Next != nil {
			heap.Push(pg, minNode.Next)
		}
	}

	return dummyHead.Next
}

func hasCycle(head *utils.ListNode) bool {
	if head == nil || head.Next == nil {
		return false
	}

	slow, fast := head, head.Next

	for fast != nil && fast.Next != nil {
		slow = slow.Next
		fast = fast.Next.Next

		if slow == fast {
			return true
		}
	}

	return false
}

func addTwoNumbers(l1 *utils.ListNode, l2 *utils.ListNode) *utils.ListNode {
	dummyHead := &utils.ListNode{}
	current := dummyHead
	carry := 0

	for l1 != nil || l2 != nil || carry != 0 {
		sum := carry
		if l1 != nil {
			sum += l1.Val
			l1 = l1.Next
		}

		if l2 != nil {
			sum += l2.Val
			l2 = l2.Next
		}

		carry = sum / 10

		current.Next = &utils.ListNode{Val: sum % 10}
		current = current.Next
	}

	return dummyHead.Next
}
