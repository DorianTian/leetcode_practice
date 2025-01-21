package classification

func SetZeroes(matrix [][]int) [][]int {
	firstRow := false
	firstCol := false

	for i := 0; i < len(matrix); i++ {
		if matrix[i][0] == 0 {
			firstCol = true
			break
		}
	}

	for i := 0; i < len(matrix[0]); i++ {
		if matrix[0][i] == 0 {
			firstRow = true
			break
		}
	}

	for i := 1; i < len(matrix); i++ {
		for j := 1; j < len(matrix[0]); j++ {
			if matrix[i][j] == 0 {
				matrix[i][0] = 0
				matrix[0][j] = 0
			}
		}
	}

	for i := 1; i < len(matrix); i++ {
		for j := 1; j < len(matrix[0]); j++ {
			if matrix[i][0] == 0 || matrix[0][j] == 0 {
				matrix[i][j] = 0
			}
		}
	}

	if firstRow {
		for i := 0; i < len(matrix[0]); i++ {
			matrix[0][i] = 0
		}
	}

	if firstCol {
		for i := 0; i < len(matrix); i++ {
			matrix[i][0] = 0
		}
	}

	return matrix
}

func SpiralOrder(matrix [][]int) []int {
	var result []int

	top := 0
	bottom := len(matrix) - 1
	left := 0
	right := len(matrix[0]) - 1

	for top <= bottom && left <= right {
		for col := left; col <= right; col++ {
			result = append(result, matrix[top][col])
		}

		top++

		for row := top; row <= bottom; row++ {
			result = append(result, matrix[row][right])
		}

		right--

		if top <= bottom {
			for col := right; col >= left; col-- {
				result = append(result, matrix[bottom][col])
			}

			bottom--
		}

		if left <= right {
			for row := bottom; row >= top; row-- {
				result = append(result, matrix[row][left])
			}

			left++
		}
	}

	return result
}

func RotateMatrix(matrix [][]int) [][]int {
	cols := len(matrix[0])

	// transpose matrix
	for i := 0; i < len(matrix); i++ {
		for j := i + 1; j < cols; j++ {
			matrix[i][j], matrix[j][i] = matrix[j][i], matrix[i][j]
		}
	}

	for i := 0; i < len(matrix); i++ {
		for j := 0; j < cols/2; j++ {
			matrix[i][j], matrix[i][cols-j-1] = matrix[i][cols-j-1], matrix[i][j]
		}
	}

	return matrix
}

func SearchMatrix(matrix [][]int, target int) bool {
	rows := len(matrix)
	cols := len(matrix[0])

	row, col := 0, cols-1

	for row < rows && col >= 0 {
		if matrix[row][col] == target {
			return true
		} else if matrix[row][col] > target {
			col--
		} else {
			row++
		}
	}

	return false
}
