package utils

// CreateLinkedListArray 创建链表数组的方法
func CreateLinkedListArray(arr [][]int) []*ListNode {
	// 定义链表数组
	listArray := make([]*ListNode, len(arr))

	// 遍历二维数组，为每个一维数组创建对应的链表
	for i, vals := range arr {
		listArray[i] = CreateSingleLinkList(vals)
	}

	return listArray
}
