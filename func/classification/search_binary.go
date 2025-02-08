package classification

func SearchInsert(nums []int, target int) int {
	left, right := 0, len(nums)-1
	for left <= right {
		mid := (left + right) / 2
		if nums[mid] == target {
			return mid
		} else if nums[mid] > target {
			right = mid - 1
		} else {
			left = mid + 1
		}
	}

	return left
}

func SearchMatrix(matrix [][]int, target int) bool {
	rows := len(matrix)

	for i := 0; i < rows; i++ {
		lastCol := len(matrix[i])
		if matrix[i][lastCol-1] < target {
			continue
		}

		left, right := 0, lastCol-1

		for left <= right {
			mid := (left + right) / 2

			if matrix[i][mid] == target {
				return true
			} else if matrix[i][mid] < target {
				left = mid + 1
			} else {
				right = mid - 1
			}
		}
	}

	return false
}

func SearchRange(nums []int, target int) []int {
	var result []int

	var findFirstPosition func(nums []int, target int) int
	var findLastPosition func(nums []int, target int) int

	findFirstPosition = func(nums []int, target int) int {
		left, right := 0, len(nums)-1
		firstPosition := -1

		for left <= right {
			mid := (left + right) / 2

			if nums[mid] == target {
				firstPosition = mid
				right = mid - 1
			} else if nums[mid] > target {
				right = mid - 1
			} else {
				left = mid + 1
			}
		}

		return firstPosition
	}

	findLastPosition = func(nums []int, target int) int {
		left, right := 0, len(nums)-1
		lastPosition := -1

		for left <= right {
			mid := (left + right) / 2

			if nums[mid] == target {
				lastPosition = mid
				left = mid + 1
			} else if nums[mid] < target {
				left = mid + 1
			} else {
				right = mid - 1
			}
		}

		return lastPosition
	}

	firstPosition := findFirstPosition(nums, target)
	if firstPosition == -1 {
		return append([]int(nil), -1, -1)
	}

	lastPosition := findLastPosition(nums, target)
	result = append([]int(nil), firstPosition, lastPosition)

	return result
}
