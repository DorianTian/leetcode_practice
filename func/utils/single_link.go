package utils

type ListNode struct {
	Val  int
	Next *ListNode
}

type Node struct {
	Val    int
	Next   *Node
	Random *Node
}

func CreateRandomLinkedList(array [][]int) *Node {
	if len(array) == 0 {
		return nil
	}

	// 创建一个节点数组，用于存储已创建的节点
	var nodes []*Node

	// 首先创建所有的节点，并将它们存储在节点数组中
	for _, value := range array {
		val, _ := value[0], value[1] // value[0] 是节点值，value[1] 是 Random 节点的索引
		newNode := &Node{Val: val}
		nodes = append(nodes, newNode)
	}

	// 重新连接所有节点的 Next 和 Random 指针
	for i, value := range array {
		// 当前节点的 Next 指向下一个节点
		if i < len(array)-1 {
			nodes[i].Next = nodes[i+1]
		}

		// 设置 Random 指针
		randomIndex := value[1] // Random 指向的节点的索引
		if randomIndex >= 0 && randomIndex < len(nodes) {
			nodes[i].Random = nodes[randomIndex]
		}
	}

	// 返回链表的头节点
	return nodes[0]
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

func removeNthFromEnd(head *ListNode, n int) *ListNode {
	dummyHead := &ListNode{}
	dummyHead.Next = head

	fast, slow := dummyHead, dummyHead

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

func deleteDuplicates(head *ListNode) *ListNode {
	dummyHead := &ListNode{}
	dummyHead.Next = head

	cur := head
	pre := dummyHead

	for cur != nil {
		if cur.Next != nil && cur.Val == cur.Next.Val {
			for cur.Next != nil && cur.Val == cur.Next.Val {
				cur = cur.Next
			}

			pre.Next = cur.Next
		} else {
			pre = cur
		}

		cur = cur.Next
	}

	return dummyHead.Next
}

func rotateRight(head *ListNode, k int) *ListNode {
	if head == nil || k == 0 {
		return head
	}

	length := 1
	tail := head

	for tail.Next != nil {
		tail = tail.Next
		length++
	}

	tail.Next = head
	steps := length - k%length

	for steps > 0 {
		tail = tail.Next
		steps--
	}

	head = tail.Next
	tail.Next = nil

	return head
}
