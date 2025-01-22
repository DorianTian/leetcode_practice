package classification

import "leetcode_practice/func/utils"

func InorderTraversal(root *utils.TreeNode) []int {
	var inorderList []int

	var traversal func(node *utils.TreeNode)
	traversal = func(node *utils.TreeNode) {
		if node == nil {
			return
		}

		traversal(node.Left)
		inorderList = append(inorderList, node.Val)
		traversal(node.Right)
	}

	traversal(root)

	return inorderList
}

func MaxDepth(root *utils.TreeNode) int {
	if root == nil {
		return 0
	}

	queue := []*utils.TreeNode{root}
	depth := 0

	for len(queue) > 0 {
		size := len(queue)
		depth++

		for i := 0; i < size; i++ {
			node := queue[0]
			queue = queue[1:]
			if node.Right != nil {
				queue = append(queue, node.Right)
			}
			if node.Left != nil {
				queue = append(queue, node.Left)
			}
		}
	}

	return depth
}
