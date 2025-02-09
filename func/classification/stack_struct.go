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
