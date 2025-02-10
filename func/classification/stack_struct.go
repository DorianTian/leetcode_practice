package classification

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
