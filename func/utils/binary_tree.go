package utils

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func CreateBinaryTreeByLevel(array []*int) *TreeNode {
	if len(array) == 0 {
		return nil
	}

	root := &TreeNode{Val: *array[0]}
	queue := []*TreeNode{root}

	index := 1
	for index < len(array) {
		current := queue[0]
		queue = queue[1:]

		if index < len(array) && array[index] != nil {
			current.Left = &TreeNode{Val: *array[index]}
			queue = append(queue, current.Left)
		}

		index++
		if index < len(array) && array[index] != nil {
			current.Right = &TreeNode{Val: *array[index]}
			queue = append(queue, current.Right)
		}
		index++
	}

	return root
}

func LevelOrderTraversal(root *TreeNode) []int {
	result := make([]int, 0)

	if root == nil {
		return result
	}

	queue := []*TreeNode{root}
	for len(queue) > 0 {
		node := queue[0]
		queue = queue[1:]
		result = append(result, node.Val)
		if node.Left != nil {
			queue = append(queue, node.Left)
		}
		if node.Right != nil {
			queue = append(queue, node.Right)
		}
	}

	return result
}
