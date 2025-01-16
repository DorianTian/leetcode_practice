package main

import (
	"fmt"
	"leetcode_practice/func/practice"
)

func main() {
	fmt.Println("Main")
	//nums := [][]int{{1, 4}, {5, 6}}
	nums := []int{1, 2, 3, 4, 5, 6, 7}
	k := 3
	//t := "ABC"
	//s := "ADOBECODEBANC"
	//p := "abc"
	//utils.QuickSort(nums, 0, len(nums)-1)
	answer := practice.Rotate(nums, 3)

	//fmt.Printf("nums: %v\n", nums)
	fmt.Printf("answer: %v\n", answer)
}
