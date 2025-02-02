package classification

import (
	"leetcode_practice/func/utils"
)

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

func IsValidBST(root *utils.TreeNode) bool {
	if root == nil {
		return true
	}

	var validBST func(node *utils.TreeNode, min *int, max *int) bool

	validBST = func(node *utils.TreeNode, min *int, max *int) bool {
		if node == nil {
			return true
		}

		if (min != nil && node.Val <= *min) || (max != nil && node.Val >= *max) {
			return false
		}

		return validBST(node.Left, min, &node.Val) && validBST(node.Right, &node.Val, max)
	}

	return validBST(root, nil, nil)
}

func KthSmallest(root *utils.TreeNode, k int) int {
	count := 0
	kthValue := 0

	var inorder func(node *utils.TreeNode)
	inorder = func(node *utils.TreeNode) {
		if node == nil {
			return
		}

		inorder(node.Left)
		count++
		if count == k {
			kthValue = node.Val
			return
		}
		inorder(node.Right)
	}

	inorder(root)

	return kthValue
}

func RightSideView(root *utils.TreeNode) []int {
	if root == nil {
		return nil
	}
	rightViews := make([]int, 0)
	queue := []*utils.TreeNode{root}

	for len(queue) > 0 {
		size := len(queue)
		tempNode := queue[0]

		for i := 0; i < size; i++ {
			tempNode = queue[0]
			queue = queue[1:]

			if tempNode.Left != nil {
				queue = append(queue, tempNode.Left)
			}

			if tempNode.Right != nil {
				queue = append(queue, tempNode.Right)
			}
		}

		rightViews = append(rightViews, tempNode.Val)
	}

	return rightViews
}

func Flatten(root *utils.TreeNode) {
	var prev *utils.TreeNode
	var preorder func(node *utils.TreeNode)

	preorder = func(node *utils.TreeNode) {
		if node == nil {
			return
		}

		left := node.Left
		right := node.Right

		if prev != nil {
			prev.Right = node
			prev.Left = nil
		}

		prev = node

		preorder(left)
		preorder(right)
	}

	preorder(root)
}

func BuildTree(preorder []int, inorder []int) *utils.TreeNode {
	inorderMap := make(map[int]int)
	for idx, value := range inorder {
		inorderMap[value] = idx
	}

	var build func(inorderStart int, inorderEnd int, preorderStart int, preorderEnd int) *utils.TreeNode
	build = func(inorderStart int, inorderEnd int, preorderStart int, preorderEnd int) *utils.TreeNode {
		if inorderStart > inorderEnd || preorderStart > preorderEnd {
			return nil
		}

		rootValue := preorder[preorderStart]
		root := &utils.TreeNode{Val: rootValue}
		rootIndex := inorderMap[rootValue]
		leftLen := rootIndex - inorderStart

		root.Left = build(inorderStart, rootIndex-1, preorderStart+1, preorderStart+leftLen)
		root.Right = build(rootIndex+1, inorderEnd, preorderStart+leftLen+1, preorderEnd)
	}

	return build(0, len(inorder)-1, 0, len(preorder)-1)
}

func PathSum(root *utils.TreeNode, targetSum int) int {
	prefixSum := map[int]int{0: 1}

	var dfs func(node *utils.TreeNode, currentSum int, target int, prefixSum map[int]int) int
	dfs = func(node *utils.TreeNode, currentSum int, target int, prefixSum map[int]int) int {
		if node == nil {
			return 0
		}

		currentSum += node.Val
		count := prefixSum[currentSum-target]
		prefixSum[currentSum]++

		count += dfs(node.Left, currentSum, target, prefixSum)
		count += dfs(node.Right, currentSum, target, prefixSum)

		prefixSum[currentSum]--

		return count
	}

	return dfs(root, 0, targetSum, prefixSum)
}

func LowestCommonAncestor(root, p, q *utils.TreeNode) *utils.TreeNode {
	if root == nil || root == p || root == q {
		return root
	}

	left := LowestCommonAncestor(root.Left, p, q)
	right := LowestCommonAncestor(root.Right, p, q)

	if left != nil && right != nil {
		return root
	}

	if left != nil {
		return left
	} else if right != nil {
		return right
	}

	return nil
}
