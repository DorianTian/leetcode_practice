package classification

import "unicode"

func IsValid(s string) bool {
	var stack []string
	bracketMap := map[string]string{
		")": "(",
		"]": "[",
		"}": "{",
	}

	for _, char := range s {
		charStr := string(char)

		if _, exist := bracketMap[charStr]; exist {
			if len(stack) > 0 && stack[len(stack)-1] == bracketMap[charStr] {
				stack = stack[:len(stack)-1]
			} else {
				return false
			}
		} else {
			stack = append(stack, charStr)

		}
	}

	return len(stack) == 0
}

type MinStack struct {
	minStack []int
	stack    []int
}

func Constructor() MinStack {
	return MinStack{
		minStack: make([]int, 0),
		stack:    make([]int, 0),
	}
}

func (this *MinStack) Push(val int) {
	this.stack = append(this.stack, val)
	if len(this.minStack) == 0 || this.GetMin() >= val {
		this.minStack = append(this.minStack, val)
	}
}

func (this *MinStack) Pop() {
	if len(this.stack) == 0 {
		return
	}
	removed := this.stack[len(this.stack)-1]
	this.stack = this.stack[:len(this.stack)-1]

	if removed == this.GetMin() {
		this.minStack = this.minStack[:len(this.minStack)-1]
	}
}

func (this *MinStack) Top() int {
	if len(this.stack) == 0 {
		return -1
	}

	return this.stack[len(this.stack)-1]
}

func (this *MinStack) GetMin() int {
	if len(this.minStack) == 0 {
		return -1
	}

	return this.minStack[len(this.minStack)-1]
}

func decodeString(s string) string {
	var stack []interface{}
	var currentString string
	var currentNumber int

	var repeatString func(repeatCount int, currentString string) string
	repeatString = func(repeatCount int, currentString string) string {
		result := ""

		for i := 0; i < repeatCount; i++ {
			result += currentString
		}

		return result
	}

	for i := 0; i < len(s); i++ {
		char := s[i]

		if unicode.IsDigit(rune(char)) {
			currentNumber = currentNumber*10 + int(char-'0')
		} else if char == '[' {
			stack = append(stack, currentNumber)
			stack = append(stack, currentString)
			currentNumber = 0
			currentString = ""
		} else if char == ']' {
			prevString := stack[len(stack)-1].(string)
			stack = stack[:len(stack)-1]
			repeatCount := stack[len(stack)-1].(int)
			stack = stack[:len(stack)-1]

			currentString = prevString + repeatString(repeatCount, currentString)
		} else {
			currentString += string(char)
		}
	}

	return currentString
}

func DailyTemperatures(temperatures []int) []int {
	answer := make([]int, len(temperatures))
	var stack []int

	for i, temp := range temperatures {
		for len(stack) > 0 && temp > temperatures[stack[len(stack)-1]] {
			prevTempIndex := stack[len(stack)-1]
			stack = stack[:len(stack)-1]
			answer[prevTempIndex] = i - prevTempIndex
		}

		stack = append(stack, i)
	}

	return answer
}

func LargestRectangleArea(heights []int) int {
	var stack []int
	maxArea := 0

	for i := 0; i < len(heights); i++ {
		for len(stack) > 0 && heights[stack[len(stack)-1]] > heights[i] {
			h := heights[stack[len(stack)-1]]
			stack = stack[:len(stack)-1]

			var width int
			if len(stack) == 0 {
				width = i
			} else {
				width = i - stack[len(stack)-1] - 1
			}

			area := h * width

			if area > maxArea {
				maxArea = area
			}
		}

		stack = append(stack, i)
	}

	for len(stack) > 0 {
		h := heights[stack[len(stack)-1]]
		stack = stack[:len(stack)-1]
		var width int
		if len(stack) == 0 {
			width = len(heights)
		} else {
			width = len(heights) - stack[len(stack)-1] - 1
		}

		area := h * width
		if area > maxArea {
			maxArea = area
		}
	}

	return maxArea
}
