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

func InvertTree(root *utils.TreeNode) *utils.TreeNode {
	if root == nil {
		return nil
	}

	temporaryNode := root.Left
	root.Left = root.Right
	root.Right = temporaryNode

	if root.Right != nil {
		InvertTree(root.Right)
	}
	if root.Left != nil {
		InvertTree(root.Left)
	}

	return root
}

func IsSymmetric(root *utils.TreeNode) bool {
	if root == nil {
		return false
	}

	queue := []*utils.TreeNode{root.Left, root.Right}

	for len(queue) > 0 {
		left := queue[0]
		queue = queue[1:]
		right := queue[0]
		queue = queue[1:]

		if left == nil && right == nil {
			continue
		}

		if left == nil || right == nil || left.Val != right.Val {
			return false
		}

		queue = append(queue, left.Left, right.Right)
		queue = append(queue, right.Left, left.Right)
	}

	return true
}

func DiameterOfBinaryTree(root *utils.TreeNode) int {
	maxDepth := 0

	var dfs func(node *utils.TreeNode) int
	dfs = func(root *utils.TreeNode) int {
		if root == nil {
			return 0
		}

		leftDepth := dfs(root.Left)
		rightDepth := dfs(root.Right)

		maxDepth = max(maxDepth, leftDepth+rightDepth)

		return 1 + max(leftDepth, rightDepth)
	}

	return maxDepth
}

func LevelOrder(root *utils.TreeNode) [][]int {
	result := make([][]int, 0)

	if root == nil {
		return result
	}

	queue := []*utils.TreeNode{root}

	for len(queue) > 0 {
		size := len(queue)
		levelValues := make([]int, 0)

		for i := 0; i < size; i++ {
			node := queue[0]
			queue = queue[1:]

			levelValues = append(levelValues, node.Val)

			if node.Left != nil {
				queue = append(queue, node.Left)
			}

			if node.Right != nil {
				queue = append(queue, node.Right)
			}
		}

		result = append(result, levelValues)
	}

	return result
}

func SortedArrayToBST(nums []int) *utils.TreeNode {
	if len(nums) == 0 {
		return nil
	}

	var buildSortTree func(left, right int) *utils.TreeNode

	buildSortTree = func(left, right int) *utils.TreeNode {
		if left > right {
			return nil
		}

		mid := (left + right) / 2
		node := &utils.TreeNode{Val: nums[mid]}

		node.Left = buildSortTree(left, mid-1)
		node.Right = buildSortTree(mid+1, right)

		return node
	}

	return buildSortTree(0, len(nums)-1)
}
