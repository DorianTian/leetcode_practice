package classification

import "sort"

func permute(nums []int) [][]int {
	var result [][]int
	var temp []int
	var backtrack func([]int)
	backtrack = func(nums []int) {
		if len(temp) == len(nums) {
			copyTemp := make([]int, len(temp))
			copy(copyTemp, temp)
			result = append(result, copyTemp)
			return
		}

		for i := 0; i < len(nums); i++ {
			found := false
			for _, v := range temp {
				if v == nums[i] {
					found = true
					break
				}
			}

			if found {
				continue
			}

			temp = append(temp, nums[i])
			backtrack(nums)
			temp = temp[:len(temp)-1]
		}
	}

	backtrack(nums)
	return result
}

func subsets(nums []int) [][]int {
	var result [][]int
	var currentSubset []int

	var backtrack func(start int)
	backtrack = func(start int) {
		subsetCopy := append([]int(nil), currentSubset...)
		result = append(result, subsetCopy)

		for i := start; i < len(nums); i++ {
			currentSubset = append(currentSubset, nums[i])
			backtrack(i + 1)
			currentSubset = currentSubset[:len(currentSubset)-1]
		}
	}

	backtrack(0)

	return result
}

func LetterCombinations(digits string) []string {
	if digits == "" {
		return nil
	}

	strDigits := []rune(digits)
	var result []string
	phoneMap := map[rune]string{
		'2': "abc",
		'3': "def",
		'4': "ghi",
		'5': "jkl",
		'6': "mno",
		'7': "pqrs",
		'8': "tuv",
		'9': "wxyz",
	}

	var backtrack func(start int, current string)
	backtrack = func(start int, current string) {
		if start == len(digits) {
			result = append(result, current)
			return
		}

		letters := phoneMap[strDigits[start]]
		for _, letter := range letters {
			backtrack(start+1, current+string(letter))
		}
	}

	backtrack(0, "")

	return result
}

func CombinationSum(candidates []int, target int) [][]int {
	var result [][]int
	var currentCombination []int
	var backtrack func(start int, remainTarget int)

	backtrack = func(start int, remainTarget int) {
		if remainTarget == 0 {
			result = append(result, append([]int(nil), currentCombination...))
			return
		}

		for i := start; i < len(candidates); i++ {
			if candidates[i] > remainTarget {
				break
			}

			currentCombination = append(currentCombination, candidates[i])
			backtrack(i, remainTarget-candidates[i])
			currentCombination = currentCombination[:len(currentCombination)-1]
		}
	}

	sort.Ints(candidates)
	backtrack(0, target)

	return result
}

func GenerateParenthesis(n int) []string {
	var result []string
	var backtrack func(currentCombination string, left int, right int)

	backtrack = func(currentCombination string, left int, right int) {
		if len(currentCombination) == n*2 {
			result = append(result, currentCombination)
			return
		}

		if left < n {
			backtrack(currentCombination+"(", left+1, right)
		}

		if right < left {
			backtrack(currentCombination+")", left, right+1)
		}
	}

	backtrack("", 0, 0)
	return result
}

func Exist(board [][]byte, word string) bool {
	rows, cols := len(board), len(board[0])

	var backtrack func(row, col, index int) bool
	backtrack = func(row, col, index int) bool {
		if index == len(word) {
			return true
		}

		if row < 0 || row >= rows || col < 0 || col >= cols || board[row][col] != word[index] {
			return false
		}

		temp := board[row][col]
		board[row][col] = '#'

		result :=
			backtrack(row-1, col, index+1) || backtrack(row+1, col, index+1) ||
				backtrack(row, col+1, index+1) || backtrack(row, col-1, index+1)

		board[row][col] = temp
		return result
	}

	for i := 0; i < rows; i++ {
		for j := 0; j < cols; j++ {
			if backtrack(i, j, 0) {
				return true
			}
		}
	}

	return false
}

func Partition(s string) [][]string {
	var result [][]string
	var currentPartition []string

	var isPalindrome func(s string) bool
	isPalindrome = func(s string) bool {
		left, right := 0, len(s)-1
		for left < right {
			if s[left] != s[right] {
				return false
			}

			left++
			right--
		}

		return true
	}

	var backtrack func(start int)
	backtrack = func(start int) {
		if start == len(s) {
			result = append(result, append([]string(nil), currentPartition...))
			return
		}

		for i := start + 1; i <= len(s); i++ {
			substr := s[start:i]
			if isPalindrome(substr) {
				currentPartition = append(currentPartition, substr)
				backtrack(i)
				currentPartition = currentPartition[:len(currentPartition)-1]
			}
		}
	}

	backtrack(0)

	return result
}

func SolveNQueens(n int) [][]string {
	var result [][]string
	var board []string

	columns := make([]bool, n)
	mainDiagonal := make([]bool, 2*n-1)
	antiDiagonal := make([]bool, 2*n-1)
	var backtrack func(row int)
	var generateBoard func(col, n int) string

	generateBoard = func(col, n int) string {
		board := make([]byte, n)
		for i := 0; i < n; i++ {
			if i == col {
				board[i] = 'Q'
			} else {
				board[i] = '.'
			}
		}

		return string(board)
	}

	backtrack = func(row int) {
		if row == n {
			result = append(result, append([]string(nil), board...))
			return
		}

		for col := 0; col < n; col++ {
			if columns[col] || mainDiagonal[row-col+n-1] || antiDiagonal[row+col] {
				continue
			}
			board[row] = generateBoard(col, n)
			columns[col] = true
			antiDiagonal[row+col] = true
			mainDiagonal[row-col+n-1] = true

			backtrack(row + 1)
			columns[col] = false
			antiDiagonal[row+col] = false
			mainDiagonal[row-col+n-1] = false
		}
	}

	board = make([]string, n)
	backtrack(0)
	return result
}
